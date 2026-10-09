"""Catch broken published navigation, metadata and sitemap entries."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit
import json
import xml.etree.ElementTree as ET

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links, self.ids, self.canonical, self.structured_data = [], [], [], []
        self.h1 = 0
        self.in_json = False

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        if tag == 'h1':
            self.h1 += 1
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonical.append(attrs.get('href'))
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.in_json = True
        for key in ('href', 'src'):
            if key in attrs:
                self.links.append(attrs[key])

    def handle_endtag(self, tag):
        if tag == 'script':
            self.in_json = False

    def handle_data(self, data):
        if self.in_json:
            self.structured_data.append(data)

for path in Path('.').glob('*.html'):
    page = Page()
    page.feed(path.read_text())
    assert page.h1 == 1, (path, 'expected one h1')
    assert len(page.ids) == len(set(page.ids)), (path, 'duplicate IDs')
    if path.stem != '404':
        expected = 'https://garagemath.com/' + ('' if path.stem == 'index' else path.stem)
        assert page.canonical == [expected], (path, 'canonical mismatch')
    else:
        assert 'name="robots" content="noindex"' in path.read_text()
    for data in page.structured_data:
        json.loads(data)
    for link in page.links:
        url = urlsplit(link)
        if url.scheme or url.netloc:
            continue
        target = Path(url.path or path.name)
        assert target.is_file(), (path, link, 'missing file')
        if url.fragment:
            destination = Page()
            destination.feed(target.read_text())
            assert url.fragment in destination.ids, (path, link, 'missing anchor')

for path in Path('.').glob('sitemap*.xml'):
    urls = [loc.text for loc in ET.parse(path).findall('.//{*}loc')]
    assert len(urls) == len(set(urls)), (path, 'duplicate URLs')
    for url in urls:
        route = urlsplit(url).path
        assert not route.endswith('.html'), (path, 'redirecting URL')
        target = Path('index.html' if route == '/' else route[1:] + '.html')
        assert target.is_file(), (path, url, 'missing page')
        assert target.stem != '404', (path, '404 in sitemap')

print('Site links, anchors, metadata, structured data and sitemaps passed')

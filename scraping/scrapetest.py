from urllib.request import urlopen
from bs4 import BeautifulSoup
import re

diyBaseUrl = 'https://www.diy.com{}'

def getWardrobeUrls(baseUrl):
  urls = []
  html = urlopen(baseUrl.format('/departments/home-furniture-storage/bedroom-furniture/furniture/wardrobes/DIY822465.cat#Icamp=Nav_Bedroom_furniture_DIY822465'))
  soup = BeautifulSoup(html, 'html.parser')
  tags = soup.find_all('a', {'data-test-id': 'product-panel-main-section'})

  for tag in tags:
    urls.append(tag.attrs['href'])

  return urls

def getWardrobeDetails(baseUrl):
  details = []
  for url in getWardrobeUrls(baseUrl):
    try:
      html = urlopen(baseUrl.format(url))
      soup = BeautifulSoup(html, 'html.parser')

      title = soup.find('h1', {'data-test-id': 'hero-info-title'}).get_text()
      desc = soup.find('div', {'data-test-id': 'ProductDescText'}).get_text()
      imgUrl = soup.find('img', {'data-test-id': 'image'}).attrs['src']
      width = soup.find(text='Width (mm)').parent.parent.find('td').get_text()
      height = soup.find(text='Height (mm)').parent.parent.find('td').get_text()
      depth = soup.find(text='Depth (mm)').parent.parent.find('td').get_text()

      details.append({
        'url': diyBaseUrl.format(url),
        'title': title,
        'imgUrl': imgUrl,
        'desc': desc,
        'width': width,
        'height': height,
        'depth': depth,
      })

    except:
      details.append({
        'url': url,
        'error': True,
      })

  return details

print(getWardrobeDetails(diyBaseUrl))



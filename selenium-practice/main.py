# Web Crawling : 수많은 웹사이트들을 체계적으로 돌아다니면서 URL, 키워드 등을 수집하는 것. 보통 겁색 엔진이 웹사이트를 인덱싱하기 위해서 사용됨.
# Web Scraping : 웹사이트에서 필ㅇ요한 데이터를 긁어오는 것.



import requests

# https://workey.codeit.kr/ratings/index?year=2010&month=4&weekIndex=0

rating_pages = []
for i in range(5):
  url = "https://workey.codeit.kr/ratings/index?year=2010&month=4&weekIndex={}".format(i)
  response = requests.get(url)
  rating_page = response.text
  rating_pages.append(rating_page)

print(len(rating_pages))
print(rating_pages[0])
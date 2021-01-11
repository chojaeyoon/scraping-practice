from bs4 import Beautifulsoup

response = requests.get("https://workey.codeit.kr/ratings/index")
raiting_page = response.text

soup = BeautifulSoup(rating_page, 'html.parser')
print(soup.prettify())


import xmltodict
import json
import requests
  
  
# Sample URL to fetch the html page
url = "https://pypi.org/project/xmltojson/"
  
# Headers to mimic the browser
headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 \
    (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'
}
  
# Get the page through get() method
html_response = requests.get(url=url, headers = headers)
  
# Save the page content as sample.html
with open("sample.html", "w", encoding="utf-8") as html_file:
    html_file.write(html_response.text)
      
with open("sample.html", "r", encoding="utf-8") as html_file:
    html = html_file.read()
    json_ = xmltodict.parse(html)
      
with open("data.json", "w") as file:
    json.dump(json_, file)
      
print(json_)
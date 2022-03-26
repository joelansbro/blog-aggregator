// https://github.com/mozilla/readability  - this can transform the page for readability, but also pre clean a lot of the stuff from the page we don't need 

// https://github.com/jsdom/jsdom - this can gen a Node DOM from a given URL 

// https://github.com/cure53/DOMPurify for clearing xss 

// this would be an option to load stuff into an artificial dom to strip back content like html tags, though that can be achieved via other methods
// still, an interesting exercise, but I don't think I'll do this in the end

const { JSDOM } = require('jsdom');
const fs = require('fs');

const url = "https://www.theguardian.com/info/2022/mar/25/react-islands-on-theguardiancom"

const dom = JSDOM.fromURL(url)
  .then(function(dom){
    var result = dom.window.document.querySelector('body').textContent.trim();
    fs.writeFile('output.txt', result, err => {
      if (err) {
        console.log("nahh")
        return
      }
    })
  }

)

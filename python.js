// this connects to the python scraping script and also passes the JSON as it is currently saved down locally
// I will want to pass the JSON from script3.py into a mongoDB database
// which would allow me to pass the 

const express = require('express')
const {spawn} = require('child_process');
const app = express()
const port = 3001
const fs = require('fs');
const cron = require('node-cron')


app.get('/', (req, res) => {
 
 var dataToSend;
 // spawn new child process to call the python script
 const python = spawn('python', ['script3.py']);
 // collect data from script
 python.stdout.on('data', function (data) {
  console.log('Pipe data from python script ...');
  dataToSend = data.toString();
 });
 // in close event we are sure that stream from child process is closed
 python.on('close', (code) => {
 console.log(`child process close all stdio with code ${code}`);
 // send data to browser
 res.send(dataToSend)
 });
 
})

app.get('/articles', (req, res) => {
    var data = JSON.parse(fs.readFileSync('scraped_articles.json', 'utf8'))
    res.send(data)
})

app.listen(port, () => console.log(`Example app listening on port 
${port}!`))

// The above code, sets up a basic express app with one get router. Inside the get router, we spawn a new child_process with parameters:

// The above code, sets up a basic express app with one get router. Inside the get router, we spawn a new child_process with parameters:

// test out and try to implement https://github.com/codelucas/newspaper

// https://medium.com/swlh/run-python-script-from-node-js-and-send-data-to-browser-15677fcf199f
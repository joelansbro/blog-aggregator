const express = require('express')
const {spawn} = require('child_process');
const app = express()
const port = 3001

app.get('/', (req, res) => {
 
 var dataToSend;
 // spawn new child process to call the python script
 const python = spawn('python', ['script1.py']);
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
app.listen(port, () => console.log(`Example app listening on port 
${port}!`))

// The above code, sets up a basic express app with one get router. Inside the get router, we spawn a new child_process with parameters:

// The above code, sets up a basic express app with one get router. Inside the get router, we spawn a new child_process with parameters:

// test out and try to implement https://github.com/codelucas/newspaper
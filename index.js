const express = require('express')
const { restart } = require('nodemon')
const app = express()
const port = 3000

app.get ( "/" ,(req, res) => {
  res.send('Ok.') ;
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})
app.get("/test", (req, res) => {
  res.status(200).send({ status: 200, message: "ok" });
}) 	;

app.get("/time", (req, res) => {
  let time = new Date();
  res
    .status(200)
    .send({ status: 200, message: `${time.getHours()}:${time.getMinutes()}` });
});

app.listen(port, console.log(`Connected to ${port}`));  

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



app.get("/search", (req, res) => {
  if (req.query.s) {
    res.status(200).send({ status: 200, message: "ok", data: req.query.s });
  } else {
    res.status(500).send({
      status: 500,
      error: true,
      message: "you have to provide a search",
    });
  }
});
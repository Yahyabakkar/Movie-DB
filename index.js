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

const movies = [
  { title: 'Jaws', year: 1975, rating: 8 },
  { title: 'Avatar', year: 2009, rating: 7.8 },
  { title: 'Brazil', year: 1985, rating: 8 },
  { title: 'الإرهاب والكباب', year: 1992, rating: 6.2 }
]
app.get("/movies/create", (req, res) => {});

app.get("/movies/read", (req, res) => {
  res.status(200).send({ status: 200, data: movies });
});

app.get("/movies/update", (req, res) => {});

app.get("/movies/delete", (req, res) => {});

app.get("/movies/read/:content", (req, res) => {
  if (req.params.content == "by-date") {
    res.status(200).send({ status: 200, data: movies.sort((a, b) => a.year - b.year) });
  } else if (req.params.content == "by-rating") {
    res.status(200).send({ status: 200, data: movies.sort((a, b) => b.rating - a.rating) });
  } else if (req.params.content == "by-title") {
    res.status(200).send({
      status: 200,
      data: movies.sort((a, b) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      ),
    });
  }
});
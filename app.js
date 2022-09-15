const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


const html = `
<!DOCTYPE html>

<head>
  <link href="https://fonts.googleapis.com/css?family=Barlow|Source+Sans+Pro&display=swap" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<html>

<body>
  <h1>🎥 Seja Bem Vindo ao Mãosflix</h1>
  <p>Qual comédia quer assistir hoje?</p>
  <button id="laugh" onclick="run()">😂 Quer diversão?</button>
  <div id="movie" style="visibility: hidden;">
    <img src="" alt="movie poster">
    <div>
      <h1></h1>
      <p></p>
    </div>
  </div>
  <script type="text/javascript" src="main.js"></script>
</body>
`

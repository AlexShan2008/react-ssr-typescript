import React from "react";
import { renderToString } from "react-dom/server";
import Counter from "@/routes/Counter";

const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const html = renderToString(<Counter />);
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SSR</title>
  </head>
  <body>
    <div id='root'>${html}</div>
    <script src='/client.js'></script/>
  </body>
  </html>
  `);
});

app.listen(3000);

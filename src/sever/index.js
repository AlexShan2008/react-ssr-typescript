import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "@/App";
import proxy from "express-http-proxy";

const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(
  "/api",
  proxy("http://localhost:8000", {
    proxyReqPathResolver(req) {
      return `/api${req.url}`;
    },
  })
);

app.get("*", (req, res) => {
  const html = renderToString(
    <StaticRouter>
      <App />
    </StaticRouter>
  );
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

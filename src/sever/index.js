import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "@/App";
import proxy from "express-http-proxy";
import { getSeverStore } from "@/store";
import { matchRoutes } from "react-router-dom";
import routesConfig from "../routesConfig";
import StyleContext from "isomorphic-style-loader-react18/StyleContext";
import { Helmet } from "react-helmet";

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
  const routeMatches = matchRoutes(routesConfig, { pathname: req.url });
  if (routeMatches) {
    const { store } = getSeverStore(req);
    const loadDataPromises = routeMatches
      .map((match) =>
        match.route.element.type.loadData?.(store).then(
          (data) => data,
          (error) => error
        )
      )
      .concat(App.loadData?.(store))
      .filter(Boolean);

    Promise.all(loadDataPromises).then(() => {
      if (req.url === "/profile" && !store.getState().auth.user) {
        return res.redirect("/login");
      } else if (routeMatches[routeMatches.length - 1].route.path === "*") {
        res.statusCode = 404;
      }
      const css = new Set();
      const insertCss = (...styles) => {
        styles.forEach((style) => {
          css.add(style._getCss());
        });
      };

      const helmet = Helmet.renderStatic();
      const { pipe } = renderToPipeableStream(
        <StyleContext.Provider value={{ insertCss }}>
          <StaticRouter location={req.url}>
            <App store={store} />
          </StaticRouter>
        </StyleContext.Provider>,
        {
          // bootstrapScripts: ["/client.js"],
          onShellReady() {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html;charset:utf8");

            let styles = "";
            if (css.size > 0) {
              styles = `\n<style>${[...css].join("")}</style>`;
            }

            res.write(`
              <!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${styles}
              </head>
              <body>
                <div id='root'>
            `);
            pipe(res);
            res.write(`
                </div>
                <script>
                { var context = {state:${JSON.stringify(store.getState())} }}
                </script/>
                <script src="/client.js"></script>
              </body>
              </html>
            `);
          },
        }
      );
    });
  } else {
    res.sendStatus(404);
  }
});

app.listen(3000);

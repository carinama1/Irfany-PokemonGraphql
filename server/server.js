import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import App from "../src/App";
import routes from "../src/routes";

const PORT = 8001;

const app = express();

app.use("^/$", (req, res, next) => {
  const context = {};

  const toRender = (
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  console.log(toRender);
  const app = ReactDOMServer.renderToString(toRender);

  const indexFile = path.resolve("./build/index.html");
  fs.readFileSync(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    if (context.status === 404) {
      res.status(404);
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});

import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
const { renderToStringAsync } = require("react-async-ssr");

import App from "../src/App";

const PORT = 8001;

const app = express();

app.use("^/$", (req, res, next) => {
  const context = {};

  const render = async () => {
    const html = await renderToStringAsync(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    return html;
  };

  const app = ReactDOMServer.renderToString(render);

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

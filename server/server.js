import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { MemoryRouter } from "react-router-dom";

import App from "../src/App";

const PORT = process.env.PORT || 8001;

const app = express();

app.use(express.static("build"));
app.use("*", (req, res, next) => {
  res.type("html");
  const context = {};

  const renderThis = (
    <MemoryRouter context={context} location={req.url}>
      <App />
    </MemoryRouter>
  );

  const app = ReactDOMServer.renderToString(renderThis);

  const indexFile = path.resolve("./build/index.html");
  const data = fs.readFileSync(indexFile);
  if (context.status === 404) {
    console.log("seomthing happened");
    res.status(404);
  }
  return res.send(
    data
      .toString()
      .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
  );
});

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});

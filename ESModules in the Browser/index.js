import { Div } from "./append-div.js";
// import * as d3 from "https://unpkg.com/d3?module";

import("https://unpkg.com/d3?module").then(
  (res) => console.log(res),
  (err) => console.log(err)
);

Div("Hello from external script");

// Dynamic import
import("./async.js").then(
  (res) => res.go(),
  (err) => {
    console.log("Something went wrong!");
    throw err;
  }
);

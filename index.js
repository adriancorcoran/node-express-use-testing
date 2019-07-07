// required to access variables in the .env file
const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
//  The querystring module provides utilities for parsing and formatting URL query strings - usage: https://nodejs.org/api/querystring.html
// const querystring = require("querystring");
// wraps requests in an easy to use promise - usage: https://www.npmjs.com/package/request-promise
// const request = require("request-promise");
//  ------------------------------------------------
// can add locals available throughout the application
// https://expressjs.com/en/api.html#app.locals
// app.locals.users = ["adrian", "karen"];
// console.log(app.locals);
//  ------------------------------------------------

//  ------------------------------------------------
// can add availables to the app itself andf read them using set and get
// https://expressjs.com/en/api.html#app.set
// app.set("owner", "Adrian Corcoran");
// console.log(app.get("owner"));
//  ------------------------------------------------

//  ------------------------------------------------
// Mounts the specified middleware function or functions at the specified path:
// the middleware function is executed when the base of the requested path
// matches path.
// app.use([path,] callback [, callback...])
// https://expressjs.com/en/api.html#app.use

// e.g. 1
// console.log(`before use()`);
// app.use(function(req, res, next) {
//   console.log(`using this`);
//   req.msg = "Hello ALL the Worlds! :)";
//   next();
// });
// console.log(`after use()`);

// e.g. 2
// console.log(`before use()`);
// function changeMsg(req, res, next) {
//   console.log(`using this`);
//   req.msg = "Hello ALL the Worlds! :)";
//   res.msg = "Hello to only some of the Worlds! :)";
//   next();
// }
// app.use(changeMsg);
// console.log(`after use()`);

// e.g. 3
// console.log(`before use()`);
// const changeMsg = require("./changeMsg");
// app.use(changeMsg.changeMsg);
// console.log(`after use()`);

// e.g. 4
console.log(`before use()`);
const changeMsg = require("./changeMsg2");
app.use(changeMsg);
console.log(`after use()`);

// e.g. 5
// imports and default exports not supported by default in Node yet

//  ------------------------------------------------

app.get("/", (req, res) => {
  if (res.msg) {
    res.send(res.msg);
  } else if (req.msg) {
    res.send(req.msg);
  } else {
    res.send("Hello World!");
  }
});

app.get("/env", (req, res) => {
  const myKey = process.env.MY_KEY;
  res.send(`This is my key: ${myKey}`);
  // res.json(process.env);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000 http://localhost:3000!");
});

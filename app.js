const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;

express()
  .use(express.static(__dirname))
  .use(express.static(path.join(__dirname,"/public")))
  .get("/",(req,res) => res.send("index"))
  .listen(port,() =>  console.log(`\nListening:\t${port}`));

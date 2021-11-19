const express = require("express");
const request = require("supertest");
const app = express();
const PORT = 3000;
const ZCTracker = require("./ZCTracker");
const ZCT = new ZCTracker();

app.get("/display", function (req, res) {
  ZCT.list();
  res.status(200).send({
    ZCs: ZCT.display,
  });
});
app.post("/insert/:ZC", (req, res) => {
  ZCT.insert(req);
  res.status(200).send({
    message: `Zip Code ${req.params.ZC} inserted.`,
  });
});
app.post("/has/:ZC", (req, res) => {
  const contains = ZCT.display.includes(req.params.ZC);
  res.status(200).send({
    exists: contains,
  });
});
app.listen(PORT, () => {
  console.log(`listening at ${PORT}`);
});
module.exports = app;

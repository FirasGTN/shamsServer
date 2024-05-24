const express = require("express");
const route = express.Router();
const app = express();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

route.get("/getbgimages", require("./Background Images/getbgimages"));
route.post("/addbgimages", require("./Background Images/addbgimages"));
route.put("/upbgimages", require("./Background Images/upbgimages"));
// route.get("/getuser/:id", require("./getuser"));

route.get("/getusers", require("./getusers"));
route.get("/getuser/:id", require("./getuser"));
route.post("/register", require("./register"));
route.post("/login", require("./login"));

route.get("/getcost", require("./Costs/getCost"));
route.get("/getcostfiltred/:userId", require("./Costs/getCostFiltred"));
route.post("/addcost", require("./Costs/addCost"));

route.get("/getprofit", require("./Profits/getProfit"));
route.get("/getprofitfiltred/:userId", require("./Profits/getProfitFiltred"));
route.post("/addprofit", require("./Profits/addProfit"));

route.put("/addservice", require("./Services/addService"));
route.get("/getservices", require("./Services/getServices"));
route.get("/getservice/:tag", require("./Services/getService"));
route.delete("/dropservice", require("./Services/dropService"));

module.exports = route;

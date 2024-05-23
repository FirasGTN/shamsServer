const express = require("express");
const route = express.Router();
const app = express();
const bodyParser = require("body-parser");
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

route.get("/getdaily", require("./Profits/getDaily"));
route.get("/getmonthly", require("./Profits/getMonthly"));
route.get("/getyearly", require("./Profits/getYearly"));

route.put("/addcost", require("./Costs/addCost"));
route.post("/addprofit", require("./Profits/addProfit"));

route.put("/addservice", require("./Services/addService"));
route.get("/getservices", require("./Services/getServices"));
route.get("/getservice/:tag", require("./Services/getService"));
route.delete("/dropservice", require("./Services/dropService"));

module.exports = route;

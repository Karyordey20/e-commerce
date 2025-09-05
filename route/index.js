const authRoute = require("./authRoute");
const Route = require("./others");
const CategoryRoute = require("./prdtCatRoute");
const orderRoute = require("./order");
const productRoute = require("./product");
const refresh = require("./refresh")


const Routes = [
    authRoute,
    orderRoute,
    Route,
    CategoryRoute,
    productRoute,
    refresh
]

module.exports = Routes
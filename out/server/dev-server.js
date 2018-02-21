"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Middlewares = require("./config/middlewares/base/MiddlewaresBase");
const path = require("path");
var app = express();
//var port = parseInt(process.env.PORT, 10) || 5000;
var port = 5000;
app.set("port", port);
app.use(Middlewares.configuration);
var publicPath = express.static(path.join(__dirname, '../client'), { redirect: false });
//var indexPath = path.join(__dirname, '../client/index.html');
app.use(publicPath);
//app.get('/', function (_, res) { res.sendFile(indexPath); });
//app.get('*', function (_, res) { res.sendFile(indexPath); });
app.listen(app.get("port"), () => {
    console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
});
//# sourceMappingURL=dev-server.js.map
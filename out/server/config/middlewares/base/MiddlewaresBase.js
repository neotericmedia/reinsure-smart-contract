"use strict";
const express = require("express");
const bodyParser = require("body-parser");
// import MethodOverride = require("./../MethodOverride");
const BaseRoutes = require("./../../routes/base/BaseRoutes");
class MiddlewaresBase {
    static get configuration() {
        var app = express();
        app.use(bodyParser.json());
        //  app.use(MethodOverride.configuration());
        app.use(new BaseRoutes().routes);
        return app;
    }
}
Object.seal(MiddlewaresBase);
module.exports = MiddlewaresBase;
//# sourceMappingURL=MiddlewaresBase.js.map
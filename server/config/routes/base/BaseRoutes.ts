import express = require("express");
import ApiRoutes = require("./../ApiRoutes");
var app = express();
class BaseRoutes {
    
    get routes() {
        app.use("/", new ApiRoutes().routes);

        // app.get('/api', function(req, res){
        //     res.json("asdfasdfzzz123");
        // });

        return app;
    }
}
export = BaseRoutes;
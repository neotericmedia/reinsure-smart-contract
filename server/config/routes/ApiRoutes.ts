import express = require("express");
import ApiController = require("./../../controllers/ApiController");

var router = express.Router();
class ApiRoutes {
    private _apiController: ApiController;
    
    constructor () {
        this._apiController = new ApiController();   
    }
    get routes () {
        var controller = this._apiController;
        router.get("/api", controller.retrieve);
        router.post("/api", controller.create);
        router.put("/api/:_id", controller.update);
        router.get("/api/:_id", controller.findById);
        router.delete("/api/:_id", controller.delete);
        
        // router.get('/api', function(req, res){
        //     res.json("121212asdfasdfzzz12345678");
        // });


        return router;
    }
    
    
}

Object.seal(ApiRoutes);
export = ApiRoutes;
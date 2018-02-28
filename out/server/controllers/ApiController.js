"use strict";
const ApiBusiness = require("./../app/business/ApiBusiness");
class ApiController {
    create(req, res) {
        try {
            //* post w/o persist
            var api = req.body;
            res.send(api);
            //var api: IApiModel = <IApiModel>req.body;
            //var apiBusiness = new ApiBusiness();
            // apiBusiness.create(api, (error, result) => {
            //     if(error) res.send({"error": "error"});
            //     else res.send({"success": "success"});
            // });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    update(req, res) {
        try {
            var api = req.body;
            var _id = req.params._id;
            var apiBusiness = new ApiBusiness();
            apiBusiness.update(_id, api, (error, result) => {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    delete(req, res) {
        try {
            var _id = req.params._id;
            var apiBusiness = new ApiBusiness();
            apiBusiness.delete(_id, (error, result) => {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    retrieve(req, res) {
        try {
            //res.sendFile(path.join(__dirname, '../index.html'));
            res.send({ "results": "success", "results2": "success" });
            //res.json({data: [{"name": "explained blah A"},{"name": "explained blah B"}]});
            //  var apiBusiness = new ApiBusiness();
            //      apiBusiness.retrieve((error, result) => {
            //         if(error) res.send({"error": "error"});
            //         else res.send(result);                    
            //     });   
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    findById(req, res) {
        try {
            var _id = req.params._id;
            var apiBusiness = new ApiBusiness();
            apiBusiness.findById(_id, (error, result) => {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
}
module.exports = ApiController;
//# sourceMappingURL=ApiController.js.map
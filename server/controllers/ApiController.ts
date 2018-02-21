import express = require("express");
import ApiBusiness = require("./../app/business/ApiBusiness");
import IBaseController = require("./interfaces/base/BaseController");
import IApiModel = require("./../app/model/interfaces/ApiModel");
import * as path from "path";



class ApiController implements IBaseController <ApiBusiness> {
    
    create(req: express.Request, res: express.Response): void {
            try {                
                //* post w/o persist
                var api: IApiModel = <IApiModel>req.body;
                res.send(api);
                //var api: IApiModel = <IApiModel>req.body;
                //var apiBusiness = new ApiBusiness();
                // apiBusiness.create(api, (error, result) => {
                //     if(error) res.send({"error": "error"});
                //     else res.send({"success": "success"});
                // });
            }
            catch (e)  {
                console.log(e);
                res.send({"error": "error in your request"});

            }
    }
    update(req: express.Request, res: express.Response): void {
        try {
             var api: IApiModel = <IApiModel>req.body;
             var _id: string = req.params._id;
             var apiBusiness = new ApiBusiness();
                apiBusiness.update(_id, api, (error, result) => {
                    if(error) res.send({"error": "error"});
                    else res.send({"success": "success"});
                });   
            }
            catch (e)  {
                console.log(e);
                res.send({"error": "error in your request"});

            }
    }
    delete(req: express.Request, res: express.Response): void {
        try {
                
             var _id: string = req.params._id;
             var apiBusiness = new ApiBusiness();
                apiBusiness.delete(_id, (error, result) => {
                    if(error) res.send({"error": "error"});
                    else res.send({"success": "success"});
                });   
            }
            catch (e)  {
                console.log(e);
                res.send({"error": "error in your request"});

            }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {
             //res.sendFile(path.join(__dirname, '../index.html'));
             //res.send({"results": "success","results2": "success"});
             res.json({data: [{"name": "explained blah A"},{"name": "explained blah B"}]});

            //  var apiBusiness = new ApiBusiness();
            //      apiBusiness.retrieve((error, result) => {
            //         if(error) res.send({"error": "error"});
            //         else res.send(result);                    
            //     });   
            }
            catch (e)  {
                console.log(e);
                res.send({"error": "error in your request"});

            }
    }
    findById(req: express.Request, res: express.Response): void {
        try {
             
             var _id: string = req.params._id;
             var apiBusiness = new ApiBusiness();
                apiBusiness.findById(_id, (error, result) => {
                    if(error) res.send({"error": "error"});
                    else res.send(result);
                });   
            }
            catch (e)  {
                console.log(e);
                res.send({"error": "error in your request"});
                
            }
    }
    
        
}
export = ApiController;    
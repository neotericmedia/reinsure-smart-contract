
import ApiRepository = require("./../repository/ApiRepository");
import IApiBusiness = require("./interfaces/ApiBusiness");
import IApiModel = require("./../model/interfaces/ApiModel");
import ApiModel = require("./../model/ApiModel");


class ApiBusiness  implements IApiBusiness {
    private _apiRepository: ApiRepository;
    
    constructor () {
        this._apiRepository = new ApiRepository();
    }  
        
    create (item: IApiModel, callback: (error: any, result: any) => void) {
        this._apiRepository.create(item, callback);   
    }
   
    retrieve (callback: (error: any, result: any) => void) {
         this._apiRepository.retrieve(callback);
    }
    
    update (_id: string, item: IApiModel, callback: (error: any, result: any) => void) {
        
        this._apiRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);
            
            else 
                this._apiRepository.update(res._id, item, callback);
               
        });    
    }
    
    delete (_id: string, callback:(error: any, result: any) => void) {
        this._apiRepository.delete(_id , callback);
    }
    
    findById (_id: string, callback: (error: any, result: IApiModel) => void) {
        this._apiRepository.findById(_id, callback);
    }
    
}


Object.seal(ApiBusiness);
export = ApiBusiness;
import IApiModel = require("./interfaces/ApiModel");

class ApiModel {
   
   private _apiModel: IApiModel;
   
   constructor(apiModel: IApiModel) {
       this._apiModel = apiModel;
   }
   get name (): string {
       return this._apiModel.name;
   }
   
//    get power (): string {
//        return this._apiModel.power;
//    }
   
//    get amountPeopleSaved (): number {
//        return this._apiModel.amountPeopleSaved;
//    }
   
    
}
Object.seal(ApiModel);
export =  ApiModel;
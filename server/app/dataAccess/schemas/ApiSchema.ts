import DataAccess = require("./../../dataAccess/DataAccess");
import IApiModel = require("./../../model/interfaces/ApiModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class ApiSchema {
   
  static get schema () {
       var schema =  mongoose.Schema({
           name : {
               type: String,
               required: true
           }
        //    power: {
        //        type: String,
        //        required: true
        //    },
        //    amountPeopleSaved: {
        //        type: Number,
        //        required: true
        //    }
       });
       
       return schema;
   }
   
}
var schema = mongooseConnection.model<IApiModel>("Apis", ApiSchema.schema);
export = schema;
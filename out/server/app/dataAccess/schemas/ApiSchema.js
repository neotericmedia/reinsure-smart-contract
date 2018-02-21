"use strict";
const DataAccess = require("./../../dataAccess/DataAccess");
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
class ApiSchema {
    static get schema() {
        var schema = mongoose.Schema({
            name: {
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
var schema = mongooseConnection.model("Apis", ApiSchema.schema);
module.exports = schema;
//# sourceMappingURL=ApiSchema.js.map
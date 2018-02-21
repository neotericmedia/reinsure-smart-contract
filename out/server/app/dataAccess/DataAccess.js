"use strict";
const Mongoose = require("mongoose");
const Constants = require("./../../config/constants/Constants");
class DataAccess {
    constructor() {
        DataAccess.connect();
    }
    static connect() {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once("openUri", () => {
            console.log("Connected to mongodb!");
        });
        this.mongooseInstance = Mongoose.connect(Constants.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    }
}
DataAccess.connect();
module.exports = DataAccess;
//# sourceMappingURL=DataAccess.js.map
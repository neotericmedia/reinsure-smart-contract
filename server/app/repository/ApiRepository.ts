import ApiModel = require("./../model/ApiModel");
import IApiModel = require("./../model/interfaces/ApiModel");
import ApiSchema = require("./../dataAccess/schemas/ApiSchema");
import RepositoryBase = require("./base/RepositoryBase");

class ApiRepository extends RepositoryBase<IApiModel> {        
    constructor () {
        super(ApiSchema);
    }    
} 

Object.seal(ApiRepository);
export = ApiRepository;
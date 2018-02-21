import IReadController = require("./../common/ReadController");
import IWriteController = require("./../common/WriteController");
import IBaseBusiness = require("../../../app/business/interfaces/base/BaseBusiness");
interface BaseController<T extends IBaseBusiness<any>> extends IReadController, IWriteController{
    
    
} 
export = BaseController;
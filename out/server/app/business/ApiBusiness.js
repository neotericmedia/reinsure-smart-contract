"use strict";
const ApiRepository = require("./../repository/ApiRepository");
class ApiBusiness {
    constructor() {
        this._apiRepository = new ApiRepository();
    }
    create(item, callback) {
        this._apiRepository.create(item, callback);
    }
    retrieve(callback) {
        this._apiRepository.retrieve(callback);
    }
    update(_id, item, callback) {
        this._apiRepository.findById(_id, (err, res) => {
            if (err)
                callback(err, res);
            else
                this._apiRepository.update(res._id, item, callback);
        });
    }
    delete(_id, callback) {
        this._apiRepository.delete(_id, callback);
    }
    findById(_id, callback) {
        this._apiRepository.findById(_id, callback);
    }
}
Object.seal(ApiBusiness);
module.exports = ApiBusiness;
//# sourceMappingURL=ApiBusiness.js.map
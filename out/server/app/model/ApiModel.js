"use strict";
class ApiModel {
    constructor(apiModel) {
        this._apiModel = apiModel;
    }
    get name() {
        return this._apiModel.name;
    }
}
Object.seal(ApiModel);
module.exports = ApiModel;
//# sourceMappingURL=ApiModel.js.map
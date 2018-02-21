"use strict";
const ApiSchema = require("./../dataAccess/schemas/ApiSchema");
const RepositoryBase = require("./base/RepositoryBase");
class ApiRepository extends RepositoryBase {
    constructor() {
        super(ApiSchema);
    }
}
Object.seal(ApiRepository);
module.exports = ApiRepository;
//# sourceMappingURL=ApiRepository.js.map
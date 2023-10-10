"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStorageGateway = void 0;
const postgres_1 = require("../../../config/postgres");
class UserStorageGateway {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM users ORDER BY id DESC;";
            const { rows: userRows } = yield postgres_1.pool.query(query);
            return userRows.map((user) => user);
        });
    }
    findById(id) {
        throw new Error("Method not implemented.");
    }
    save(user) {
        throw new Error("Method not implemented.");
    }
    update(user) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
}
exports.UserStorageGateway = UserStorageGateway;
;
//# sourceMappingURL=user.storage.gateway.js.map
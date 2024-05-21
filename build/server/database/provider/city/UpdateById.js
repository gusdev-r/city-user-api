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
exports.updateById = void 0;
const TableNames_1 = require("../../TableNames");
const knex_1 = require("../../knex");
const updateById = (id, city) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, knex_1.Knex)(TableNames_1.TablesNames.city)
            .update(city)
            .where("id", id);
        if (result > 0)
            return;
        return new Error("The element search for updation was not found in the system.");
    }
    catch (error) {
        console.log(error);
        return new Error("The element search for updation was not found in the system.");
    }
});
exports.updateById = updateById;
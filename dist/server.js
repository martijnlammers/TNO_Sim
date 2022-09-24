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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express = require("express");
var client_1 = require("@prisma/client");
var uuid_1 = require("uuid");
var app = express();
app.use(express.json());
var port = 3000;
var prisma = new client_1.PrismaClient();
app.post('/simulation/history', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.sim_history.create({
                    data: {
                        id: "".concat((0, uuid_1.v4)())
                    }
                })];
            case 1:
                result = _a.sent();
                res.send(result);
                return [2 /*return*/];
        }
    });
}); });
app.get('/simulation/history', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(req.body['id'] != null)) return [3 /*break*/, 2];
                return [4 /*yield*/, prisma.sim_history.findUnique({
                        where: {
                            id: req.body['id']
                        },
                        include: {
                            events: true
                        }
                    })];
            case 1:
                result = _a.sent();
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, prisma.sim_history.findMany()];
            case 3:
                result = _a.sent();
                _a.label = 4;
            case 4:
                res.send(result);
                return [2 /*return*/];
        }
    });
}); });
app["delete"]('/simulation/history', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.sim_history.deleteMany()];
            case 1:
                result = _a.sent();
                res.send(result);
                return [2 /*return*/];
        }
    });
}); });
// app.get('/simulation/event', async (req, res) => {
//   const results = await prisma.sim_event.findMany({
//     where: {
//       user_id: req.body['user_id'],
//     },
//   });
//   res.send(results);
// })
app.post('/simulation/event', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.sim_event.create({
                    data: {
                        user_id: req.body['user_id'],
                        action: req.body['action'],
                        history_id: req.body['history_id']
                    }
                })];
            case 1:
                results = _a.sent();
                res.send(results);
                return [2 /*return*/];
        }
    });
}); });
var server = app.listen(3000, function () {
    return console.log("\uD83D\uDE80 Server ready at: http://localhost:3000");
});

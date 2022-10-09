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
var app = express().use(express.json());
var port = 80;
var prisma = new client_1.PrismaClient();
var hostname = '0.0.0.0';
app.get("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.send("Hello world!");
        return [2 /*return*/];
    });
}); });
app.post("/simulation/session", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, result, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.session.create({ data: data })];
            case 2:
                result = _a.sent();
                res.send(result);
                return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                console.log(e_1);
                res.send(e_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.put("/simulation/session", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, result, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.session.update({
                        where: {
                            id: req.body["id"]
                        },
                        data: data
                    })];
            case 2:
                result = _a.sent();
                res.send(result);
                return [3 /*break*/, 4];
            case 3:
                e_2 = _a.sent();
                console.log(e_2);
                res.send(e_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get("/simulation/session", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var keywords, results, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                keywords = req.body["keywords"];
                console.log(keywords);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.session.findMany(keywords)];
            case 2:
                results = _a.sent();
                res.send(results);
                return [3 /*break*/, 4];
            case 3:
                e_3 = _a.sent();
                console.log(e_3);
                res.send(e_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post("/simulation/user", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, result, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.user.create({ data: data })];
            case 2:
                result = _a.sent();
                res.send(result);
                return [3 /*break*/, 4];
            case 3:
                e_4 = _a.sent();
                res.send(e_4);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get("/simulation/user", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var keywords, results, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                keywords = req.body["keywords"];
                console.log(keywords);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.user.findMany(keywords)];
            case 2:
                results = _a.sent();
                res.send(results);
                return [3 /*break*/, 4];
            case 3:
                e_5 = _a.sent();
                console.log(e_5);
                res.send(e_5);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.put("/simulation/user", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, result, e_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.user.update({
                        where: {
                            id: req.body["id"]
                        },
                        data: data
                    })];
            case 2:
                result = _a.sent();
                res.send(result);
                return [3 /*break*/, 4];
            case 3:
                e_6 = _a.sent();
                console.log(e_6);
                res.send(e_6);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app["delete"]("/simulation/user", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, e_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, prisma.user["delete"]({
                        where: {
                            id: req.body["id"]
                        }
                    })];
            case 1:
                result = _a.sent();
                res.send(result);
                return [3 /*break*/, 3];
            case 2:
                e_7 = _a.sent();
                res.send(e_7);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.post("/simulation/scene", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, result, e_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.scene.create({ data: data })];
            case 2:
                result = _a.sent();
                res.send(result);
                return [3 /*break*/, 4];
            case 3:
                e_8 = _a.sent();
                console.log(e_8);
                res.send(e_8);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get("/simulation/scene", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.scene.findMany({
                    include: {
                        evidences: true
                    }
                })];
            case 1:
                results = _a.sent();
                res.send(results);
                return [2 /*return*/];
        }
    });
}); });
app.get("/simulation/evidence", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var results;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.evidence.findMany()];
            case 1:
                results = _a.sent();
                res.send(results);
                return [2 /*return*/];
        }
    });
}); });
app.post("/simulation/evidence", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, result, e_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.evidence.create({ data: data })];
            case 2:
                result = _a.sent();
                res.send(result);
                return [3 /*break*/, 4];
            case 3:
                e_9 = _a.sent();
                console.log(e_9);
                res.send(e_9);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.put("/simulation/evidence", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, result, e_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.evidence.update({
                        where: {
                            id: req.body["id"]
                        },
                        data: data
                    })];
            case 2:
                result = _a.sent();
                res.send(result);
                return [3 /*break*/, 4];
            case 3:
                e_10 = _a.sent();
                console.log(e_10);
                res.send(e_10);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post("/simulation/event", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, result, e_11;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.event.create({ data: data })];
            case 2:
                result = _a.sent();
                res.send(result);
                return [3 /*break*/, 4];
            case 3:
                e_11 = _a.sent();
                console.log(e_11);
                res.send(e_11);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.put("/simulation/event", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, result, e_12;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.event.update({
                        where: {
                            id: req.body["id"]
                        },
                        data: data
                    })];
            case 2:
                result = _a.sent();
                res.send(result);
                return [3 /*break*/, 4];
            case 3:
                e_12 = _a.sent();
                console.log(e_12);
                res.send(e_12);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
var server = app.listen(port, hostname, function () {
    return console.log("\uD83D\uDE80 Server ready at: ".concat(hostname, ":").concat(port));
});

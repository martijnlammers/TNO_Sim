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
var hostname = "0.0.0.0";
app.get("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.send("Hello world!");
        return [2 /*return*/];
    });
}); });
app.post("/simulation/session", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var description, session, scene, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                description = !!req.query.description
                    ? String(req.query.description)
                    : null;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, prisma.session.create({
                        data: {
                            description: description
                        }
                    })];
            case 2:
                session = _a.sent();
                return [4 /*yield*/, prisma.scene.create({
                        data: {
                            name: 'N/A',
                            description: 'N/A',
                            session_id: session.id
                        }
                    })];
            case 3:
                scene = _a.sent();
                res.send(session);
                return [3 /*break*/, 5];
            case 4:
                e_1 = _a.sent();
                internalError(res, e_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
app["delete"]("/simulation/session", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var session, scene, evidence, e_2, e_3, e_4, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, prisma.scene.findUnique({
                        where: { session_id: String(req.query.id) }
                    })];
            case 1:
                scene = _a.sent();
                return [3 /*break*/, 3];
            case 2:
                e_2 = _a.sent();
                return [3 /*break*/, 3];
            case 3:
                _a.trys.push([3, 5, , 6]);
                return [4 /*yield*/, prisma.evidence.deleteMany({
                        where: { scene_id: String(scene === null || scene === void 0 ? void 0 : scene.id) }
                    })];
            case 4:
                evidence = _a.sent();
                return [3 /*break*/, 6];
            case 5:
                e_3 = _a.sent();
                return [3 /*break*/, 6];
            case 6:
                _a.trys.push([6, 8, , 9]);
                return [4 /*yield*/, prisma.scene["delete"]({
                        where: { session_id: String(req.query.id) }
                    })];
            case 7:
                scene = _a.sent();
                return [3 /*break*/, 9];
            case 8:
                e_4 = _a.sent();
                return [3 /*break*/, 9];
            case 9:
                _a.trys.push([9, 11, , 12]);
                return [4 /*yield*/, prisma.session["delete"]({
                        where: { id: String(req.query.id) }
                    })];
            case 10:
                session = _a.sent();
                res.send(session);
                return [3 /*break*/, 12];
            case 11:
                e_5 = _a.sent();
                internalError(res, e_5);
                return [3 /*break*/, 12];
            case 12: return [2 /*return*/];
        }
    });
}); });
app.get("/simulation/session", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var q, scene, events, participants, results, id, e_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                q = req.query;
                scene = (q.scene == 'true' ? true : false);
                events = (q.events == 'true' ? true : false);
                participants = (q.participants == 'true' ? true : false);
                results = void 0;
                id = !!q.id;
                if (!id) return [3 /*break*/, 2];
                return [4 /*yield*/, prisma.session.findUnique({
                        where: {
                            id: String(q.id)
                        },
                        include: {
                            participants: {
                                select: {
                                    id: true,
                                    firstname: true,
                                    addition: true,
                                    lastname: true,
                                    role: true
                                }
                            },
                            events: {
                                select: {
                                    id: true,
                                    action: true,
                                    timestamp: true,
                                    user_id: true,
                                    evidence: true,
                                    glasses: true,
                                    filter: true
                                }
                            },
                            scene: {
                                select: {
                                    id: true,
                                    evidences: {
                                        select: {
                                            id: true,
                                            x: true,
                                            y: true,
                                            z: true,
                                            type: true,
                                            event_id: true
                                        }
                                    }
                                }
                            }
                        }
                    })];
            case 1:
                results = _a.sent();
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, prisma.session.findMany()];
            case 3:
                results = _a.sent();
                _a.label = 4;
            case 4:
                // Remove delete constraints of original object.
                results = JSON.parse(JSON.stringify(results));
                if (!participants)
                    delete results.participants;
                if (!events)
                    delete results.events;
                if (!scene)
                    delete results.scene;
                res.send(results);
                return [3 /*break*/, 6];
            case 5:
                e_6 = _a.sent();
                internalError(res, e_6);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
app.post("/simulation/user", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var q, result, e_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                q = req.query;
                if (!!!q.firstname || !!!q.lastname || !!!q.role) {
                    res.statusCode = 500;
                    res.send("Invalid parameters.");
                    return [2 /*return*/];
                }
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.user.create({
                        data: {
                            firstname: String(q.firstname),
                            lastname: String(q.lastname),
                            addition: !!q.addition ? String(q.addition) : null,
                            role: String(q.role)
                        }
                    })];
            case 2:
                result = _a.sent();
                res.send(result);
                return [3 /*break*/, 4];
            case 3:
                e_7 = _a.sent();
                internalError(res, e_7);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get("/simulation/user", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var q, id, results, e_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                q = req.query;
                id = !!q.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                if (!id) return [3 /*break*/, 3];
                return [4 /*yield*/, prisma.user.findUnique({
                        where: {
                            id: String(q.id)
                        }
                    })];
            case 2:
                results = _a.sent();
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, prisma.user.findMany()];
            case 4:
                results = _a.sent();
                _a.label = 5;
            case 5:
                res.send(results);
                return [3 /*break*/, 7];
            case 6:
                e_8 = _a.sent();
                internalError(res, e_8);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); });
app["delete"]("/simulation/user", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, e_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, prisma.user["delete"]({
                        where: {
                            id: String(req.query.id)
                        }
                    })];
            case 1:
                result = _a.sent();
                res.send(result);
                return [3 /*break*/, 3];
            case 2:
                e_9 = _a.sent();
                internalError(res, e_9);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.post("/simulation/evidence", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, result, id, e_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, prisma.scene.findUnique({
                        where: {
                            session_id: data['session_id']
                        }
                    })];
            case 2:
                result = _a.sent();
                id = result['id'];
                return [4 /*yield*/, prisma.evidence.create({
                        data: {
                            x: parseFloat(data['x']),
                            y: parseFloat(data['y']),
                            z: parseFloat(data['z']),
                            type: data['type'],
                            scene_id: id
                        }
                    })];
            case 3:
                result = _a.sent();
                res.send(result);
                return [3 /*break*/, 5];
            case 4:
                e_10 = _a.sent();
                internalError(res, e_10);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
app.put("/simulation/evidence", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, result, e_11;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                query = req.query;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, prisma.evidence.update({
                        where: {
                            id: String(query.id)
                        },
                        data: {
                            event_id: String(query.event_id)
                        }
                    })];
            case 2:
                result = _a.sent();
                res.send(result);
                return [3 /*break*/, 4];
            case 3:
                e_11 = _a.sent();
                internalError(res, e_11);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post("/simulation/event", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, result, e_12;
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
                e_12 = _a.sent();
                internalError(res, e_12);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
var server = app.listen(port, hostname, function () {
    return console.log("\uD83D\uDE80 Server ready at: ".concat(hostname, ":").concat(port));
});
function internalError(res, error) {
    console.log(error);
    res.statusCode = 500;
    res.send(error);
}

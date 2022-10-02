"use strict";
exports.__esModule = true;
exports.Roles = exports.GlassesType = exports.EventType = void 0;
var EventType;
(function (EventType) {
    EventType["TAKE"] = "grabbed";
    EventType["DROP"] = "dropped";
    EventType["USE"] = "uses";
})(EventType || (EventType = {}));
exports.EventType = EventType;
var GlassesType;
(function (GlassesType) {
})(GlassesType || (GlassesType = {}));
exports.GlassesType = GlassesType;
var Roles;
(function (Roles) {
    Roles["TRAINEE"] = "TRAINEE";
    Roles["SUPERVISOR"] = "SUPERVISOR";
})(Roles || (Roles = {}));
exports.Roles = Roles;

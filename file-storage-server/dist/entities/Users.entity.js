"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const typeorm_1 = require("typeorm");
const Rooms_entity_1 = require("./Rooms.entity");
const Files_entity_1 = require("./Files.entity");
let Users = class Users {
    name;
    password;
    room;
    files;
    rooms;
};
exports.Users = Users;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Users.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Rooms_entity_1.Rooms, (room) => room.id, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Rooms_entity_1.Rooms)
], Users.prototype, "room", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Files_entity_1.Files, (file) => file.id, { onDelete: 'CASCADE' }),
    __metadata("design:type", Files_entity_1.Files)
], Users.prototype, "files", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Rooms_entity_1.Rooms, (room) => room.users),
    __metadata("design:type", Array)
], Users.prototype, "rooms", void 0);
exports.Users = Users = __decorate([
    (0, typeorm_1.Entity)()
], Users);
//# sourceMappingURL=Users.entity.js.map
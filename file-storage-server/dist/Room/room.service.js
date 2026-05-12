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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Rooms_entity_1 = require("../entities/Rooms.entity");
const Users_entity_1 = require("../entities/Users.entity");
let RoomService = class RoomService {
    roomsRepo;
    usersRepo;
    constructor(roomsRepo, usersRepo) {
        this.roomsRepo = roomsRepo;
        this.usersRepo = usersRepo;
    }
    async create(room) {
        if (!room.name?.trim()) {
            throw new common_1.HttpException('Invalid room name', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            const users = await this.usersRepo.findBy({
                name: (0, typeorm_2.In)(room.users),
            });
            const newRoom = await this.roomsRepo.save({
                name: room.name,
                users,
            });
            return {
                message: 'Room created',
                data: newRoom,
            };
        }
        catch {
            throw new common_1.HttpException('Something went wrong', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAllRooms() {
        try {
            return this.roomsRepo.find({ relations: ['users'] });
        }
        catch {
            throw new common_1.HttpException('Something went wrong', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async delete(id) {
        const result = await this.roomsRepo.delete(id);
        if (result.affected === 0) {
            throw new common_1.HttpException('Room not found', common_1.HttpStatus.NOT_FOUND);
        }
        return { message: 'Room deleted successfully' };
    }
    async createForUser(name) {
        if (!name?.trim()) {
            throw new common_1.HttpException('Invalid room name', common_1.HttpStatus.BAD_REQUEST);
        }
        try {
            const user = await this.usersRepo.findOne({
                where: { name },
            });
            if (!user) {
                throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
            }
            const room = this.roomsRepo.create({
                name: 'My Storage',
                users: [user],
            });
            await this.roomsRepo.save(room);
            return room;
        }
        catch {
            throw new common_1.HttpException('Something went wrong', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getOne(id) {
        return await this.roomsRepo.findOne({
            where: { id },
            relations: ['files'],
        });
    }
};
exports.RoomService = RoomService;
exports.RoomService = RoomService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Rooms_entity_1.Rooms)),
    __param(1, (0, typeorm_1.InjectRepository)(Users_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], RoomService);
//# sourceMappingURL=room.service.js.map
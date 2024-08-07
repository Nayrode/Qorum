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
exports.SubjectService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SubjectService = class SubjectService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(name) {
        return await this.prisma.subject.create({
            data: {
                name,
            },
        });
    }
    async findAll() {
        return Promise.all((await this.prisma.subject.findMany()).map(async (subject) => ({
            id: subject.id,
            name: subject.name,
            postCount: await this.findNumberOfPosts(subject.id),
            createdAt: subject.createdAt,
        })));
    }
    async findNumberOfPosts(subjectId) {
        return (await this.prisma.subject.findUnique({
            where: {
                id: subjectId,
            },
            select: {
                posts: true,
            },
        })).posts.length;
    }
};
exports.SubjectService = SubjectService;
exports.SubjectService = SubjectService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SubjectService);
//# sourceMappingURL=subject.service.js.map
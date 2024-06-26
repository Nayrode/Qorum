import { PrismaService } from 'src/prisma/prisma.service';
export declare class SubjectService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(name: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}

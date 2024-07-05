import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AuthService {
    private usersService;
    private readonly prisma;
    constructor(usersService: UserService, prisma: PrismaService);
    validateUser(username: string, pass: string): boolean;
    generateAccessToken(username: string): Promise<string | null>;
}

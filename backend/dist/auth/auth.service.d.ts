import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UserService);
    validateUser(username: string, pass: string): boolean;
    generateAccessToken(user: string): string;
}

import { AuthService } from './auth.service';
import { LoginDto } from './dto/auth.login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(data: LoginDto): Promise<{
        accessToken: string;
    }>;
}

import { AuthAdapter } from 'src/core/adapters/auth/auth-adapter';
import { User } from 'src/core/entities/user/user';

export class AuthService {
  constructor(private adapter: AuthAdapter) {}

  async login(
    email: string,
    password: string
  ): Promise<{ success: boolean; user: User | null }> {
    return this.adapter.login(email, password);
  }

  async logout(): Promise<{ success: boolean }> {
    return this.adapter.logout();
  }
}

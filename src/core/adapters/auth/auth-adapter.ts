import { mockUser } from '../../entities/user/mock';
import { User } from '../../entities/user/user';

export class AuthAdapter {
  constructor() {}

  async login(
    email: string,
    password: string
  ): Promise<{ success: boolean; user: User | null }> {
    if (email === '1' && password === '1') {
      return { success: true, user: mockUser };
    } else {
      return { success: false, user: null };
    }
  }

  async logout(): Promise<{ success: boolean }> {
    return { success: true };
  }
}

import { mockUser } from '../../entities/user/mock';
import { AuthAdapter } from './auth-adapter';

describe('authAdapter', () => {
  const instance = new AuthAdapter();
  it('should return mock user', async () => {
    const result = await instance.login('1', '1');
    expect(result.user).toBe(mockUser);
    expect(result.success).toBe(true);
  });
  it('should return user null', async () => {
    const result = await instance.login('10', '1');
    expect(result.user).toBe(null);
    expect(result.success).toBe(false);
  });
  it('should logout', async () => {
    const result = await instance.logout();
    expect(result.success).toBe(true);
  });
});

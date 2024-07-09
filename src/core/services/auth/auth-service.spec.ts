import { authService } from '..';
import {
  mockLogin,
  mockLogout,
} from '../../adapters/auth/__mocks__/auth-adapter';

vi.mock('../../adapters/auth/auth-adapter.ts');

describe('AuthService', () => {
  it('should call to login', async () => {
    await authService.login('1', '1');
    expect(mockLogin).toHaveBeenCalledWith('1', '1');
  });
  it('should call to logout', async () => {
    await authService.logout();
    expect(mockLogout).toHaveBeenCalled();
  });
});

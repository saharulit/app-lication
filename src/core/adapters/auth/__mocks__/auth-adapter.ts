import { mockUser } from '../../../entities/user/mock';

export const mockLogin = vi.fn().mockImplementation(async () => {
  return { success: true, user: mockUser };
});
export const mockLogout = vi.fn().mockImplementation(async () => {
  return { success: true };
});

export const AuthAdapter = vi.fn().mockImplementation(() => ({
  login: mockLogin,
  logout: mockLogout,
}));

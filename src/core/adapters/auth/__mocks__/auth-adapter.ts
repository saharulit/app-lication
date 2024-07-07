import { User } from '../../../entities/user/user';

export const mockUser: User = {
  id: 1,
  firstName: 'Dana',
  lastName: 'Banana',
  email: 'dana.banaa@gmail.com',
};

// export const mockLogin = vi.fn().mockImplementation(async () => {
//   return { success: true, user: mockUser };
// });
// export const mockLogout = vi.fn().mockImplementation(async () => {
//   return { success: true };
// });

// export const AuthAdapter = vi.fn().mockImplementation(() => ({
//   login: mockLogin,
//   logout: mockLogout,
// }));

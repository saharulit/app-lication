// import { mockUser } from 'src/core/adapters/auth/__mocks__/auth-adapter';
// import { authService } from '..';

// const mockLogin = vi.fn().mockImplementation(async () => {
//   return { success: true, user: mockUser };
// });
// export const mockLogout = vi.fn().mockImplementation(async () => {
//   return { success: true };
// });

// export const AuthAdapter = vi.fn().mockImplementation(() => ({
//   login: mockLogin,
//   logout: mockLogout,
// }));

// describe('AuthService', () => {
//   it('should call to login', async () => {
//     await authService.login('1', '1');
//     expect(mockLogin).toHaveBeenCalledWith('1', '1');
//   });
//   it('should call to logout', async () => {
//     await authService.logout();
//     expect(mockLogout).toHaveBeenCalled();
//   });
// });

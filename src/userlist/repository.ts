import bcrypt from 'bcrypt';
// import { User } from '../app';
// import { AuthUserInterface, UserInterface, UserModel } from './user';

// async function findUserbyLogin(login: string): Promise<false | UserModel> {
//   console.log('bylogin');
//   return User.findOne({ where: { login: login } })
//     .then((user) => {
//       if (!user) return false;
//       console.log(user.login, user.id);
//       return user;
//     })
//     .catch(() => {
//       return false;
//     });
// }

// export async function getUserById(id: number) {
//   console.log('byid', id);
//   const user = User.findByPk(id)
//     .then((user) => {
//       if (!user) return { id: 0, login: '', role: '' };
//       const { id, login, role } = user;
//       return { id, login, role };
//     })
//     .catch((e) => {
//       throw Error(e);
//     });
//   return Promise.resolve<UserInterface>(user);
// }

// export async function deleteUserById(selectedId: number[]) {
//   await User.destroy({ where: { id: selectedId } });
//   return Promise.resolve();
// }

// // export async function blockUserById(selectedId: number[]) {
// //   await User.update({ blocked: true }, { where: { id: selectedId } });
// //   return Promise.resolve();
// // }

// // export async function unblockUserById(selectedId: number[]) {
// //   await User.update({ blocked: false }, { where: { id: selectedId } });
// //   return Promise.resolve();
// // }

// export async function setNewUser(user: AuthUserInterface) {
//   const { login, password, role } = user;
//   const isUser = await findUserbyLogin(login);
//   if (isUser)
//     return Promise.reject(
//       new Error(`User with login ${login} already exists.`)
//     );
//   const newUser = await User.create({
//     login,
//     password,
//     role: role ? role : 'user',
//   }).then((res) => res);
//   return Promise.resolve<UserInterface>({
//     ...newUser,
//   });
// }

// export async function getUserlist() {
//   console.log('userlist');
//   const userlist = await User.findAll({
//     attributes: ['id', 'login', 'role'],
//   }).then((res) => res);
//   return Promise.resolve<UserInterface[]>(userlist);
// }

// export async function loginUser(user: AuthUserInterface) {
//   console.log('login');
//   const { login, password } = user;
//   const userToLogin = await findUserbyLogin(login).then((res) => res);
//   if (userToLogin && bcrypt.compare(password, userToLogin.password)) {
//     return Promise.resolve<UserInterface>({
//       id: userToLogin.id,
//       login: userToLogin.login,
//       role: userToLogin.role,
//     });
//   }
//   return Promise.reject(new Error(`Wrong validation data`));
// }

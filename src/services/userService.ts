import { User } from '../types';

// モックユーザーデータ（実際にはデータベースから取得）
const users: Array<User> = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

export const getUserById = (id: number): User | undefined => {
  return users.find(user => user.id === id);
};

export const getAllUsers = (): Array<User> => {
  return users;
};
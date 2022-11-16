export interface User {
  id: number,
  fullName: string,
  userName: string,
  password: string
}
export const EmptyUserState: User | undefined = undefined
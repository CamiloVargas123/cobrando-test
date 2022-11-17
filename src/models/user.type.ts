export interface User {
  id?: number,
  fullName?: string,
  userName?: string,
  password?: string
}
export const EmptyUserState: User = {
  id: undefined,
  fullName: undefined,
  userName: undefined,
  password: undefined
}
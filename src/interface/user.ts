/**
 * 铲屎官信息
 */
export interface IUser {
  // 昵称
  nickName?: string;
  // 真实姓名
  userName?: string;
  // 头像
  avatarUrl?: string;
  // 性别
  gender?: string;
  unionId?: string;
  // 手机号
  mobile?: string;
  openId?: string;
  // 是否已经授权
  miniAppAuthStatus?: boolean;
}

import * as USER from "../constants/user";
import { IUser, IAction } from "../interface";

const INITIAL_USER_STATE: IUser = {
  nickName: "",
  avatarUrl: "",
  gender: "",
  unionId: "",
  mobile: "",
  openId: "",
  // 是否已经授权
  miniAppAuthStatus: true
};

export default function updateUserInfo(
  state = INITIAL_USER_STATE,
  action: IAction<any>
) {
  switch (action.type) {
    case USER.MINIAPP_SETTING:
      return {
        ...state,
        miniAppAuthStatus: action.data["scope.userInfo"]
      };
    case USER.MINIAPP_AUTH_USER_INFO:
      return {
        ...state,
        ...action.data
      };
    case USER.USER_INFO:
      return {
        ...state,
        mobile: action.data.mobile,
        openId: action.data.openId
      };
    default:
      return state;
  }
}

import * as USER from "../constants/user";
import { createApiAction } from "./index";
import { getMiniAppSetting, miniappAuth, login } from "../utils/miniapp-api";

export const getUserMiniAppSetting = createApiAction(
  USER.MINIAPP_SETTING,
  getMiniAppSetting
);

export const getMiniappAuth = createApiAction(
  USER.MINIAPP_AUTH_USER_INFO,
  miniappAuth
);

export const userLogin = createApiAction(USER.USER_INFO, login);

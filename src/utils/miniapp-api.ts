import Taro from "@tarojs/taro";
import {
  IMiniAppSetting,
  IMiniLogin,
  IUser,
  IUploadOptions
} from "../interface";
import { BASE_URL, UPLOAD_IMG } from "../constants/api";
import { userLogin } from "./api";

/**
 * 小程序获取用户是否授权
 */
export const getMiniAppSetting = () => {
  return new Promise<IMiniAppSetting>(async (resolve, reject) => {
    try {
      let authSetting = await Taro.getSetting();
      resolve(authSetting.authSetting);
    } catch (e) {
      reject(e);
    }
  });
};

/**
 * 小程序获取用户授权信息
 */
export const miniappAuth = () => {
  return new Promise<IUser>(async (resolve, reject) => {
    try {
      let authInfo = await Taro.getUserInfo();
      resolve(authInfo.userInfo);
    } catch (e) {
      reject(e);
    }
  });
};

/**
 * 小程序登录
 */
export const login = () => {
  return new Promise<IMiniLogin>(async (resolve, reject) => {
    try {
      let codeData = await Taro.login();
      let loginData = await userLogin(codeData.code);
      resolve(loginData);
    } catch (e) {
      reject(e);
    }
  });
};

/**
 * 小程序上传图片
 */
export const uploadImg = (params: IUploadOptions) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      let res = await Taro.uploadFile({
        url: BASE_URL + UPLOAD_IMG,
        name: "file",
        ...params
      });
      resolve(res);
    } catch (e) {
      reject(e);
    }
  });
};

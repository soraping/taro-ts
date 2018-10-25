import { Http } from "./request";
import * as API from "../constants/api";
import { IMiniLogin, ICat } from "../interface";
const http = new Http();

/**
 * 登录
 * @param code
 */
export const userLogin = (code: string) =>
  http.post<IMiniLogin>(API.LOGIN, {
    code
  });

/**
 * 获取猫列表
 */
export const catList = () => http.get<ICat[]>(API.CAT_LIST);
/**
 * 添加猫
 */
export const catAdd = (params: ICat) => http.post<any>(API.CAT_ADD, params);

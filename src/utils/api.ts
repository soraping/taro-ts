import { Http } from "./request";
import * as API from "../constants/api";
import { IMiniLogin } from "../interface";
const http = new Http();

/**
 * 登录
 * @param code
 */
export const userLogin = (code: string) =>
  http.post<IMiniLogin>(API.LOGIN, {
    code
  });

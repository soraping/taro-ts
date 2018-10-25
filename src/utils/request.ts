import Taro from "@tarojs/taro";
import { IHttp, IResponseData } from "../interface";
import { METHODS } from "../constants/common";
import { BASE_URL, CONTENT_TYPE } from "../constants/api";

/*
 * promise封装
 */
export class Http implements IHttp {
  async get<T>(url: string, data: object = {}): Promise<T> {
    return this.http<T>(METHODS.GET, url, data);
  }

  async post<T>(url: string, data: object = {}): Promise<T> {
    return this.http<T>(METHODS.POST, url, data);
  }

  /**
   * 请求公共方法
   * @param method
   * @param url
   * @param data
   */
  async http<T>(method: METHODS, url: string, data?: object): Promise<T> {
    return new Promise<T>(async (resolve, reject) => {
      Taro.showNavigationBarLoading();
      try {
        const res: IResponseData<T> = await Taro.request({
          url: BASE_URL + url,
          method,
          data, // 可以自己定义一些公共的参数，比如token,session
          header: {
            "content-type": CONTENT_TYPE
          }
        });
        Taro.hideNavigationBarLoading();
        switch (res.result) {
          case "OK":
            return resolve(res.data);
          default:
            console.log(res.data);
            reject(new Error(res.message));
        }
      } catch (error) {
        Taro.hideNavigationBarLoading();
        reject(new Error("网络请求出错"));
      }
    });
  }
}

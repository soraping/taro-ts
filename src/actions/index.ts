import { TDispatch, TApiAction } from "../interface/common";
/**
 * 简易封装action
 * @param actionType
 * @param func
 */

export function createApiAction<T>(
  actionType: string,
  func: (...params) => Promise<T>
): TApiAction<T> {
  return (params, callback, customActionType = actionType) => async (
    dispatch: TDispatch<T>
  ) => {
    try {
      // 执行请求
      const data = await func(params);
      // 请求成功
      dispatch({
        type: customActionType,
        data
      });
      // 可以执行成功后的方法
      // callback && callback.success && callback.success(data);
      return data;
    } catch (e) {
      // callback && callback.failed && callback.failed(e);
      return Promise.reject(e);
    }
  };
}

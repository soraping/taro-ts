export interface IHttp {
  get: <T>(url: string, data?: object) => Promise<T>;
  post: <T>(url: string, data?: object) => Promise<T>;
}

// 自定义返回值
export interface IResponseData<T> {
  // ok/error
  result?: string;
  data: T;
  // 返回说明
  message?: string;
  // 状态码
  status?: string;
  // 错误编号
  errCode?: string;
}

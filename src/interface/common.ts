import { Dispatch } from "redux";

interface ICallBack<T, P> {
  success?: (res: T) => void;
  failed?: (err: P) => void;
}

type TDispatchProps<T> = (dispatch: TDispatch<T>) => Promise<T | any>;

export type TApiAction<T> = (
  params?: object,
  callback?: ICallBack<T, any>,
  customActionType?: string
) => TDispatchProps<T>;

export interface IAction<T> {
  type: string;
  data?: T;
  err?: any;
}

interface IActionProps<T, P> {
  (params?: P): Promise<T>;
}

export type TActionDispatchProps<T, P> = IActionProps<T, P>;

export type TDispatch<T> = Dispatch<IAction<T>>;

export interface IUploadOptions {
  filePath: any;
  name?: string;
  formData?: object;
}

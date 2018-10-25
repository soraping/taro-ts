import { IStorage } from "./../interface/storage";
import Taro from "@tarojs/taro";

export const storage: IStorage = {
  getItem: key => Taro.getStorageSync(key),
  setItem: (key, value) => Taro.setStorageSync(key, value),
  removeItem: key => Taro.removeStorageSync(key),
  clear: () => Taro.clearStorageSync()
};

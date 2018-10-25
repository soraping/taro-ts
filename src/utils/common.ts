import { storage } from "./storage";
import { IMG_HOST } from "../constants/common";

/**
 * 构造图片地址
 * @param imgName
 */
export const strucImageUrl = (imgName: string) => {
  return `${IMG_HOST}/images/${imgName}`;
};

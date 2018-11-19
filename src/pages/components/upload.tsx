import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { uploadImg } from "../../utils/miniapp-api";

type TSourceType = "album" | "camera";

/**
 * 图片上传组件
 */
export default class UploadImg extends Component {
  props: {
    onCb: (url: string) => void;
  };

  render() {
    return <View className="hide" />;
  }

  /**
   * 外部执行方法
   */
  exec = async () => {
    let res = await Taro.showActionSheet({
      itemList: ["从相册中选择", "拍照"]
    });
    if (res.tapIndex == 0) {
      this._chooseWxImage("album");
    } else if (res.tapIndex == 1) {
      this._chooseWxImage("camera");
    } else {
      console.log("选择了取消");
    }
  };
  /**
   * 选择图片
   */
  _chooseWxImage = async (type: TSourceType) => {
    let res = await Taro.chooseImage({
      count: 3,
      sizeType: ["original", "compressed"],
      sourceType: [type]
    });
    this._upload(res.tempFilePaths);
  };
  /**
   * 上传
   */
  _upload = (paths: string[]) => {
    Taro.showToast({
      icon: "loading",
      title: "正在上传"
    });
    paths.forEach(async item => {
      let res = await uploadImg({
        filePath: item
      });
      this.props.onCb(res);
    });
    Taro.hideToast();
  };
}

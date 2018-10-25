import { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
/**
 * @discription: 组件模版
 * @author: soraping@163.com
 * @created: 2018/10/25 11:09:16
 */
export default class MyComponent extends Component {
  props: {};

  static options = {
    addGlobalClass: true
  };
  constructor(props) {
    super(props);
  }

  render() {
    return <View>your Component</View>;
  }
}

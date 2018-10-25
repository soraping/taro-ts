import Taro, { Component, Config } from "@tarojs/taro";
import "@tarojs/async-await";
import { Provider } from "@tarojs/redux";

import Index from "./pages/index";

import configStore from "./store";

import "./app.less";

const store = configStore();

class App extends Component {
  config: Config = {
    pages: [
      "pages/index/index"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#ffffff",
      navigationBarTitleText: "taro-ts模版",
      navigationBarTextStyle: "black"
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));

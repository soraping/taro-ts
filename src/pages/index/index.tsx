import { ComponentClass } from "react";
import { bindActionCreators } from "redux";
import Taro, { Component, Config } from "@tarojs/taro";
import { View, Text, Image, Button } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import MyComponent from "../components/demo";
import { IUser, TActionDispatchProps, IMiniAppSetting } from "../../interface";
import { getUserMiniAppSetting, getMiniappAuth } from "../../actions/user";

import "./index.less";

type PageStateProps = {
  user: IUser;
};

type PageDispatchProps = {
  getUserMiniAppSetting: TActionDispatchProps<IMiniAppSetting>;
  getMiniappAuth: TActionDispatchProps<IUser>;
};

type PageOwnProps = {};

type PageState = {};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

interface Index {
  props: IProps;
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ getUserMiniAppSetting, getMiniappAuth }, dispatch)
  };
};

@connect<PageStateProps, PageDispatchProps, PageOwnProps>(
  mapStateToProps,
  mapDispatchToProps
)
class Index extends Component {
  config: Config = {
    navigationBarTitleText: "首页"
  };

  async componentWillMount() {
    let setting = (await this.props.getUserMiniAppSetting()) as IMiniAppSetting;
    if (setting["scope.userInfo"]) {
      this.props.getMiniappAuth();
    }
  }

  render() {
    let { user } = this.props;
    return (
      <View className="index">
        <Text>welcome to taro miniapp</Text>
        <MyComponent />
        <Text>nickname: {user.nickName}</Text>
        <Image src={user.avatarUrl || ""} />
        <Button
          type="primary"
          openType="getUserInfo"
          onGetUserInfo={this._onGotUserInfo}
        >
          确认
        </Button>
      </View>
    );
  }

  _onGotUserInfo = e => {
    if (
      e.type == "getuserinfo" &&
      e.detail &&
      e.detail.errMsg == "getUserInfo:ok"
    ) {
      console.log("获取用户授权信息 => ", e.detail.userInfo);
    } else {
      console.warn("用户主动取消了授权");
    }
  };
}

export default Index as ComponentClass<PageOwnProps, PageState>;

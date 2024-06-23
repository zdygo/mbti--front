import { Component, PropsWithChildren } from "react";
import { View } from "@tarojs/components";
import "./index.scss";

/**
 * 全局footer组件（全局底部栏组件）
 */
export default class Index extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="globalFooter">
        作者：冬阳
      </View>
    );
  }
}

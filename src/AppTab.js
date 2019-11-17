import React from "react";
import { TabBar } from "antd-mobile";
import AppHome from "./AppHome";
import AppMe from "./AppMe";
import shouye from "./首页.png";
import linggan from "./灵感.png";
import wode from "./我的.png";
import shangcheng from "./商城.png" 
import shouye1 from "./首页 (1).png";
import linggan1 from "./灵感 (1).png";
import wode1 from "./我的 (1).png";
import shangcheng1 from "./商城 (1).png" 
import AppInspiration from './linggan'
import AppShop from './AppShop'
export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "blueTab"
    };
  }
  render() {
    return (
      <div
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          top: 0
        }}
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#3fcccb"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url("+shouye+") center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url("+shouye1+") center center /  21px 21px no-repeat"
                }}
              />
            }
            selected={this.state.selectedTab === "blueTab"}
            onPress={() => {
              this.setState({
                selectedTab: "blueTab"
              });
            }}
          >
            <AppHome />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                  "url("+linggan+") center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url("+linggan1+") center center /  21px 21px no-repeat"
                }}
              />
            }
            title="灵感"
            key="Koubei"
            selected={this.state.selectedTab === "redTab"}
            onPress={() => {
              this.setState({
                selectedTab: "redTab"
              });
            }}
          >
          <AppInspiration />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url("+shangcheng+") center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url("+shangcheng1+") center center /  21px 21px no-repeat"
                }}
              />
            }
            title="商城"
            key="Friend"
            // dot
            selected={this.state.selectedTab === "greenTab"}
            onPress={() => {
              this.setState({
                selectedTab: "greenTab"
              });
            }}
          >
          <AppShop />
          </TabBar.Item>
          <TabBar.Item
            icon={{
              uri:wode
              // "url("+wode+")"
            }}
            selectedIcon={{
              uri:
                wode1
            }}
            title="我的"
            key="my"
            selected={this.state.selectedTab === "yellowTab"}
            onPress={() => {
              this.setState({
                selectedTab: "yellowTab"
              });
            }}
          >
          <AppMe />
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
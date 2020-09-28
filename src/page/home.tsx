import React from 'react';
import { inject, observer } from 'mobx-react';
import './home.css'
import {
  Image, Layout, Menu, Button, Modal
} from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import HomeStore from '../store/home_store';
import CommonStore from '../store/common_store';


const { Sider } = Layout;


@inject('homeStore', 'commonStore')
@observer
export default class Home extends React.Component<{
  homeStore?: HomeStore,
  commonStore?: CommonStore,
  [x: string]: any,
}, any> {

  componentDidMount() {
    this.props.homeStore!.setMediaListeners()
  }

  selectMenuContent() {
    if (this.props.homeStore!.selectedMenu === "test1") {
      return (
        <div className="menu-content">
          <div>
            <Button type={`primary`} onClick={async () => {
              await this.props.homeStore!.requestBaidu()

            }}>请求百度</Button>
          </div>
          <div style={{
            display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <span>
              {this.props.homeStore!.counter}
            </span>
            <Button type={`primary`} onClick={() => {
              this.props.homeStore!.add()
            }}>加计数</Button>
          </div>
        </div>
      )
    } else if (this.props.homeStore!.selectedMenu === "test2") {
      return (
        <div className="menu-content">test2</div>
      )
    } else {
      return (
        <div className="menu-content">nothing</div>
      )
    }

  }

  render() {
    return (
      <div className="app">
        <div className="suspension" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div className="click-div" onClick={() => {
            window.location.href = "./"
          }}>
            <span>{this.props.commonStore!.websiteSimpleTitle}</span>
          </div>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
          }}>
            <div className="click-div" style={{
              marginRight: 20
            }} onClick={() => {
              Modal.info({
                content: "点击了登陆"
              })
            }}><span>登陆</span></div>
            <div className="click-div"><span>注册</span></div>
          </div>
        </div>
        <div className="content">
          <div className="left-space" style={{
            flex: this.props.homeStore!.isWeb ? 1 : 0
          }}></div>
          <div className="real-content">
            <div style={{
              display: "flex",
              flex: 1,
              flexDirection: "column"
            }}>
              <div className="content-header" style={{
                display: this.props.homeStore!.isWeb ? "flex" : "none"
              }}>
                <div style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center"
                }}>
                  <Image
                    width={46}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                  <span style={{
                    color: "#009a61",
                    marginLeft: 10,
                    fontSize: 28
                  }}>{this.props.commonStore!.websiteSimpleTitle}</span>
                </div>
              </div>
              <Layout className="all-menu-content">
                <Sider
                  breakpoint="lg"
                  collapsedWidth="0"
                  onBreakpoint={broken => {
                    console.log(broken);
                  }}
                  onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                  }}
                  theme="light"
                  style={{
                    backgroundColor: "#333",
                    color: "white"
                  }}
                >
                  <div className="logo" />
                  <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.props.homeStore!.selectedMenu]} style={{
                    backgroundColor: "#333"
                  }} onSelect={(e) => {
                    this.props.homeStore!.setSelectedMemu(e.key as string)
                  }}>
                    <Menu.Item key="test1" icon={<UserOutlined />}>
                      test1
                    </Menu.Item>
                    <Menu.Item key="test2" icon={<VideoCameraOutlined />}>
                      test2
                    </Menu.Item>
                    <Menu.Item key="test3" icon={<UploadOutlined />}>
                      test3
                    </Menu.Item>
                    <Menu.Item key="test4" icon={<UserOutlined />}>
                      test4
                    </Menu.Item>
                  </Menu>
                </Sider>
                {this.selectMenuContent()}
              </Layout>
            </div>
          </div>
          <div className="right-space" style={{
            flex: this.props.homeStore!.isWeb ? 1 : 0
          }}></div>
        </div>
        <div className="footer">Copyright © 2020-2030 Created by PEFISH</div>
      </div>
    );
  }
}

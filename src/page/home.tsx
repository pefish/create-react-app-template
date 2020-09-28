import React from 'react';
import { inject, observer } from 'mobx-react';
import './home.css'
import {
  Image, Layout, Menu, Input, Button
} from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import HomeStore from '../store/home_store';

const { Sider } = Layout;


@inject('homeStore')
@observer
export default class Home extends React.Component<{
  homeStore?: HomeStore,
  [x: string]: any,
}, any> {

  componentDidMount() {
    this.props.homeStore!.setMediaListeners()
  }

  selectMenuContent() {
    if (this.props.homeStore!.selectedMenu === "test1") {
      return (
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <div style={{
            width: 300
          }}>
            <Input placeholder={`用户名`} />
            <Input placeholder={`密码`} />
            <Button type={`primary`}>登录</Button>
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
        <div>test2</div>
      )
    } else {
      return (
        <div>nothing</div>
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
          <div>
            <span>这里是网站简标题</span>
          </div>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
          }}>
            <div className="click-div" style={{
              marginRight: 20
            }}><span onClick={() => {
              alert("点击登陆")
            }}>登陆</span></div>
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
                  }}>这里是网站简标题</span>
                </div>
              </div>
              <Layout className="menu-content">
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

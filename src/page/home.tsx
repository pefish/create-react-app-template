import React from 'react';
import { inject, observer } from 'mobx-react';
import './home.css'
import {
  Button, Input,
} from 'antd';
import config from '../config'

@inject('homeStore')
@observer
export default class Home extends React.Component<any, any> {
  render() {
    return (
      <div className="app">
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
            test config: {config.test}
          </span>
          <span>
            {this.props.homeStore.counter}
          </span>
          <Button type={`primary`} onClick={() => {
            this.props.homeStore.add()
          }}>加计数</Button>
        </div>
      </div>
    );
  }
}

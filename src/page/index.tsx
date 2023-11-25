import React from 'react';
import { Route, Routes } from "react-router-dom"
import Home from './home'
import NotFound from './not_found'
import { inject, observer } from 'mobx-react';
import CommonStore from '../store/common_store';
import {
  Spin,
} from 'antd';

@inject('commonStore')
@observer
export default class Index extends React.Component<{
  commonStore?: CommonStore,
  [x: string]: any,
}> {
  render() {
    return (
      <Spin style={{
        width: `100%`,
      }} tip="Loading..." spinning={this.props.commonStore!.globalLoading}>
        <div style={{
          width: `100%`,
          height: `100%`,
        }}>
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/" element={<Home/>} />
            <Route element={<NotFound/>} />
          </Routes>
        </div>
      </Spin>

    );
  }
}

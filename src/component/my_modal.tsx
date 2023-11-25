import {Modal} from "antd";
import React, {PropsWithChildren} from "react";
import HomeStore from "../store/home_store";
import CommonStore from "../store/common_store";
import {inject, observer} from "mobx-react";

@inject('homeStore', 'commonStore')
@observer
export default class MyModal extends React.Component
  <
    {
      homeStore?: HomeStore,
      commonStore?: CommonStore,
      title
        :
        string,
      visible
        :
        boolean,
      onCancel
        :
        () => void,
    } & PropsWithChildren
    ,
    any> {

  render() {
    return (
      <Modal
        title={this.props.title}
        open={this.props.visible}
        footer={null}
        onCancel={this.props.onCancel}
        zIndex={this.props.commonStore?.globalLoading ? 0 : 1000}
      >
        {this.props.children}
      </Modal>
    )
  }
}

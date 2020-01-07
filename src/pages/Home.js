// 导入react
import React from 'react';
// 导入ant-design
import { Layout, Menu, Icon } from 'antd';
// 导入 mobx
import {inject, observer} from "mobx-react";
import store from "../store";
// 导入css文件
import 'antd/dist/antd.css';
import "./Home.css"
// 导入自定义组件
import UserManage from "../components/UserManage";
import CTManage from "../components/CTManage";
import RecordManage from "../components/RecordManage";
import ExportManage from "../components/ExportManage"
// 初始化定义常量
const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;

// 修改子组件的显示
let showContent = (idx) => {
  switch(idx){
    // 显示病人
    case 1:
      return (<UserManage />);
    // 显示病历
    case 2:
      return (<RecordManage />);
    case 3:
      return (<CTManage />);
    case 4:
      return (<ExportManage />)
    default:
      break;
  }
};

@inject("store")
@observer
class Home extends React.Component {
  state = {
    collapsed: false,
    idx: 1
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  // 导航栏请求处理
  select = (e) => {
    this.setState({idx: parseInt(e.key)});
  };

  // 退出登录
  logout = () => {
    store.removeTokenAndFromStorage();
    this.props.history.push("/login");
  };

  render() {
    let { idx } = this.state;
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo"/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={this.select}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>人员列表</span>
            </Menu.Item>
            <SubMenu key="case-man" title={
                <span>
                  <Icon type="video-camera" />
                  <span>病历管理</span>
                </span>
              }>
              <Menu.Item key="2">病历列表</Menu.Item>
              <Menu.Item key="3">CT列表</Menu.Item>
            </SubMenu>
            <Menu.Item key="4">
              <Icon type="upload" />
              <span>导入/导出</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} />
            <Icon className="logout" type="logout" style={{ float: "right" }} onClick={this.logout} />
            <Icon className="bell" type="bell" style={{ float: "right" }} />
          </Header>
          <Content style={{ padding: '10px 10px 0px 10px', height:'100%', overflow:"auto" }}>
            <div style={{ background: '#fff', padding: "10px 15px 0px 15px", borderRadius: "0.5em" }}>
              {showContent(idx)}
            </div>
            <Footer style={{ textAlign: 'center', padding: "" }}>
              UPC Scientific Research Practice©2019 Created by <a href="https://github.com/ztzztztt/srp-frontend">ztzztztt</a>
            </Footer>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Home;

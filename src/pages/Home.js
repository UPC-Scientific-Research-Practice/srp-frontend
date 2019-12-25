// 导入react
import React from 'react';
// 导入ant-design
// import { Layout, Menu, Breadcrumb,Dropdown, Icon, Avatar } from 'antd';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import "./Home.css"

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

// const menu = (
//     <Menu>
//       <Menu.Item>
//         <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
//           退出
//         </a>
//       </Menu.Item>
//       <Menu.Item>
//         <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
//           关于
//         </a>
//       </Menu.Item>
//     </Menu>
//   );

class Home extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">脑出血信息采集系统</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <SubMenu key="sub1" title={
                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
              }>
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon className="trigger" type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280, }}>
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Home;
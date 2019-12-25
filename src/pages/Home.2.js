// 导入react
import React from 'react';
// 导入ant-design
import { Layout, Menu, Breadcrumb,Dropdown, Icon, Avatar } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          退出
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          关于
        </a>
      </Menu.Item>
    </Menu>
  );

class Home extends React.Component {
  render() {
    return (
        <Layout>
            <Header className="header">
            <div className="logo" >
                <span style={{ color: '#FFFFFF', fontSize: 'x-large', float: 'left' }}>脑出血数据采集系统</span>
            </div>
            <div style={{ float: 'right' }}>
                <Dropdown overlay={menu}>
                    <span className="ant-dropdown-link" href="#" style={{ cursor:'pointer'}}>
                        <Avatar icon='user'/>
                    </span>
                </Dropdown>
            </div>
            </Header>
            <Layout>
            <Sider className="sider" width={220} style={{ background: '#fff',  overflow: 'auto', height: '100vh', position: 'fixed',left: 0, }}>
                <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}>
                <SubMenu key="sub1" title={ <span><Icon type="user" />人员管理</span> }>
                    <Menu.Item key="1">添加人员信息</Menu.Item>
                    <Menu.Item key="2">查询人员信息</Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={ <span><Icon type="laptop" />病历管理</span>}>
                    <Menu.Item key="5">添加病历</Menu.Item>
                    <Menu.Item key="6">查询病历</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" />导出</span>}>
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
                </Menu>
            </Sider>
            <Layout className="content-container" style={{ padding: '0 24px 24px 244px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content className="content"
                    style={{
                        background: '#fff',
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                Content
                </Content>
            </Layout>
            </Layout>
        </Layout>
    );
  }
}

export default Home;
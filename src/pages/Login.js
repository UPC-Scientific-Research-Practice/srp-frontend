// 导入react
import React, { } from 'react';
// 导入ant-design
import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
//  mobx插件
import {inject, observer} from "mobx-react";
// 登陆组件的css样式
import './Login.css'
// 导入获取数据的接口
import {key, login} from "../api"
// 密码加密
import {rsaEncrypt} from "../utils/rsa"
import store from "../store";

@inject("store")
@observer
class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      remember: false,
      loading: false,
    };
  }
  componentDidMount(){
    store.getTokenToStorage();
    // 已登陆后直接跳转到首页
    if(store.token !== ""){
      this.props.history.replace("/");
    }
  };

  // 登录按钮事件
  handleSubmit = async e => {
    // 获取store存储变量
    let {store} = this.props;
    // 修改store中user
    store.addUser(this.props.form.getFieldsValue());
    // 设置按钮加载属性
    this.setState({
      loading: !this.state.loading,
    });
    e.preventDefault();
    // 获取公钥
    if(store.publicKey === ""){
      console.log("正在获取公钥");
      const response = await key();
      if(response && response.data){
        store.addPublicKey(response.data);
        console.log(store.publicKey);
      }else{
        console.log("发送请求失败");
        this.setState({loading: !this.state.loading});
      }
    }
    if(store.publicKey !== ""){
      const encrypt = rsaEncrypt(store.user.password, store.publicKey);
      store.addUser({username: store.user.username, password: encrypt});
      const response = await login(store.user);
      if(!response || response.code !== 200){
        console.log("登录失败");
        this.setState({loading: !this.state.loading});
      }else{
        store.addToken(response.data);
        store.setTokenToStorage();
        this.props.history.push("/");
      }
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    let { store } = this.props;
    return (
      <div className="login-pannel">
        <Row type="flex" justify="space-around" align="middle">
          <Col>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
              <p style={{ fontSize: 'xx-large', textAlign: 'center' }}>脑出血数据采集管理系统</p>
                {getFieldDecorator('username', {
                  initialValue: store.user.username,
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  initialValue: store.user.password,
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }} loading={this.state.loading}>
                  Log in
                </Button>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: false,
                })(<Checkbox>记住我?</Checkbox>)}
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
const LoginForm = Form.create({ name: 'normal_login' })(Login);

export default LoginForm;

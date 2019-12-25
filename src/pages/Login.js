// 导入react
import React from 'react';
// 导入ant-design
import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';


class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div style={{ marginTop: '8%'}} >
        <Row>
          <Col span={6} offset={9}>
            
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
              <p style={{ fontSize: 'xx-large', textAlign: 'center' }}>脑出血数据采集管理系统</p>
                {getFieldDecorator('username', {
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
                <Button type="primary" htmlType="submit" className="login-form-button"
                  style={{ width: '100%' }}
                >
                  Log in
                </Button>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(<Checkbox>Remember me</Checkbox>)}
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
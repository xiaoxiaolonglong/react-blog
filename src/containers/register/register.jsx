/* 用 户 注 册 的 路 由 组 件 */
import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import Logo from '../../components/logo/logo'

import './register.less'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
export default class Register extends Component {
    state = { username: '', password: '', password2: '', type: 'dashen' }
    //处 理 输 入 框 / 单 选 框 变 化 ,收 集 数 据 到 state 
    handleChange = (name, value) => { this.setState({ [name]: value }) }
    //跳 转 到 login路 由 
    toLogin = () => { this.props.history.replace('/login') }
    //注 册 
    register = () => { console.log(JSON.stringify(this.state)) }
    render() {
        const { type } = this.state
        const onFinish = values => {
            console.log('Success:', values);
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };
        return (
            <div className="register-box">
                <Logo/>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
              </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
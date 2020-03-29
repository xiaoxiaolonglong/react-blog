/* 用户登录的路由组件*/
import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import Logo from '../../components/logo/logo'

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
export default class Register extends Component {
    render() {
        //跳转到login路由
        const toRegister = () => {
            this.props.history.replace('/register')
        }
        const login = values => {
            console.log('Success:', values);
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };
        return (
            <div className="register-box">
                <Logo />
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={login}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: '输入用户名' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '输入密码' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">登录</Button>
                        <Button type="default" htmlType="button" onClick={toRegister}>还没有账户？</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
/* 用 户 注 册 的 路 由 组 件 */
import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import Logo from '../../components/logo/logo'

import './register.less'

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
        const toLogin = () => {
            this.props.history.replace('/login')
        }
        const register = values => {
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
                    onFinish={register}
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
                    <Form.Item
                        label="确认密码"
                        name="password2"
                        rules={[{ required: true, message: '确认密码' }, ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('两次密码不一致');
                                },
                            })
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">注册</Button>
                        <Button type="default" htmlType="button" onClick={toLogin}>已有账户？</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
    
}
/* 用户主页面的路由组件*/
import React, { Component } from 'react'

import './main.less';

import { Layout, Row, Col, Timeline, Pagination, List, Typography } from 'antd';
import HeaderNav from '../../components/header/header-nav'

const { Content, Footer } = Layout;

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

export default class Register extends Component {
    render() {
        return (
            <Layout>
                <HeaderNav />
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                        <Row gutter={16}>
                            <Col className="gutter-row" span={16}>
                                <div className="card">
                                    <Timeline>
                                        <Timeline.Item>
                                            <div>2020-03-04</div>
                                            <div>LeetCode 477.汉明距离之和 - JavaScript</div>
                                            <div>LEETCODE题解</div>
                                        </Timeline.Item>
                                        <Timeline.Item>
                                            <div>2020-03-03</div>
                                            <div>LeetCode 477.汉明距离之和 - JavaScript</div>
                                            <div>LEETCODE题解</div>
                                        </Timeline.Item>
                                    </Timeline>
                                </div>
                                <Pagination defaultCurrent={6} total={2} />
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <div className="card">
                                    <List
                                        header={<div>分类</div>}
                                        dataSource={data}
                                        size="small"
                                        renderItem={item => (
                                            <List.Item>
                                                {item}
                                            </List.Item>
                                        )}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    }
}
import React from 'react';
import {Modal, Button, Icon, Input, Row, Col, List, Card, Pagination } from 'antd';

import "./RecordManage.css";

const { Search } = Input;
const { Meta } = Card;

const data = [
    {
        title: 'Title 1',
    },{
        title: 'Title 2',
    },{
        title: 'Title 3',
    },{
        title: 'Title 4',
    },{
        title: 'Title 5',
    },{
        title: 'Title 6',
    },{
        title: 'Title 7',
    },{
        title: 'Title 8',
    },{
        title: 'Title 9',
    },{
        title: 'Title 10',
    },
];

class RecordManage extends React.Component {
    state = {
        modalVisible: false,
    };

    // 处理操作请求，例如：编辑，删除，查看
    operation(record, action){
        switch (action) {
            case "edit":
                console.log("Edit");
                break;
            case "delete":
                console.log("Delete");
                break;
            case "view":
                console.log("View");
                break;
            default:
                break;
        }
    }
    // 弹出修改，查看框
    setModalVisible(modalVisible) {
        this.setState({ modalVisible });
    }

    pagination(page){
        console.log(page);
    }

    render() {
        return (
            <div style={{height: "100%"}}>
                <div className="button-header">
                    <Row>
                        <Col xs={1}>
                            <Button type="primary" style={{padding: "0px 5px"}} onClick={() => this.setModalVisible(true)}>
                                <Icon type="plus" />添加
                            </Button>
                        </Col>
                        <Col xs={{span: 6, offset:17}}>
                            <Search placeholder="input search text" style={{}} onSearch={value => console.log(value)} enterButton />
                        </Col>
                    </Row>
                    <Modal title="添加病历"
                           centered
                           visible={this.state.modalVisible}
                           onOk={() => this.setModalVisible(false)}
                           onCancel={() => this.setModalVisible(false)}>
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                    </Modal>
                </div>
                <div className="record" style={{ padding: "10px 0px 0px 0px", height: "100%" }}>
                    <List
                        grid={{gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3,}}
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <Card hoverable
                                      style={{ width: 180, height: 240 }}
                                      cover={
                                          <img alt="Record" height={180} width={100} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                                      }>
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>
                            </List.Item>
                        )}
                    />
                    <div className="pagination">
                        <Pagination size="small" total={500} />
                    </div>
                </div>
            </div>
        );
    }
}

export default RecordManage;

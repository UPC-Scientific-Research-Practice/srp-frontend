import React from 'react';
import {Modal, Button, Divider, Table, Icon, Input, Row, Col} from 'antd';

import "./UserManage.css";
const { Search } = Input;

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },{
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },{
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },{
        key: '4',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },{
        key: '5',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },{
        key: '6',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },{
        key: '7',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },{
        key: '8',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },{
        key: '9',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },{
        key: '10',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
];



class UserManage extends React.Component {
    state = {
        modalVisible: false,
    };

    columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            ellipsis: true,
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            render: (text, record) => (<a onClick={() => this.operation(record, "view")}>{text}</a>),
        },{
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },{
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
            ellipsis: true,
        },{
             title: '民族',
             key: 'nation',
             dataIndex: 'nation',
             ellipsis: true
        },{
             title: '婚姻',
             dataIndex: 'marriage',
             key: 'marriage',
             ellipsis: true,
        },{
             title: '出生地',
             dataIndex: 'birthPlace',
             key: 'birthPlace',
             ellipsis: true,
        },{
             title: '职业',
             dataIndex: 'occupation',
             key: 'occupation',
             ellipsis: true,
        },{
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <span>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a onClick={()=>{this.operation(record, "edit")}}>修改</a>
                <Divider type="vertical" />
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a onClick={()=>{this.operation(record, "delete")}}>删除</a>
            </span>
            ),
        },
    ];


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
                    <Modal title="添加病人信息"
                           centered
                           visible={this.state.modalVisible}
                           onOk={() => this.setModalVisible(false)}
                           onCancel={() => this.setModalVisible(false)}>
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>

                    </Modal>
                </div>
                <div className="table-container" style={{ padding: "10px 0px 0px 0px", height: "100%" }}>
                    <Table
                        size="small"
                        bordered
                        style={{ height: "100%" }}
                        columns={this.columns}
                        dataSource={data}
                    />
                </div>
            </div>
        );
    }
}

export default UserManage;

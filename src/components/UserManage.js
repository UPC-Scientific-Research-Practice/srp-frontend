import React from 'react';
import { Modal, Button, Divider, Table, Icon, Input, Row, Col, Form } from 'antd';

import "./UserManage.css";
import {inject, observer} from "mobx-react";

import {getBasicInfo, addBasicInfo, editBasicInfo} from "../api";
const { Search } = Input;

@inject("store")
@observer
class UserManage extends React.Component {
    state = {
        modalVisible: false,
        editVisible: false,
        tempBasic: {
            xingming: "", no: "", hunyin: "", xingbie: "", nianling: "", chushengdi: "", minzu: "", zhiye: ""
        },
        editBasic: {
            xingming: "", no: "", hunyin: "", xingbie: "", nianling: "", chushengdi: "", minzu: "", zhiye: ""
        }
    };

    columns = [
        {
            title: '姓名',
            dataIndex: 'xingming',
            key: 'xingming',
            ellipsis: true,
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            render: (text, record) => (<a onClick={() => this.operation(record, "view")}>{text}</a>),
        },{
            title: '年龄',
            dataIndex: 'nianling',
            key: 'nianling',
        },{
            title: '性别',
            dataIndex: 'xingbie',
            key: 'xingbie',
            ellipsis: true,
        },{
             title: '民族',
             key: 'minzu',
             dataIndex: 'minzu',
             ellipsis: true
        },{
             title: '婚姻',
             dataIndex: 'hunyin',
             key: 'hunyin',
             ellipsis: true,
        },{
             title: '出生地',
             dataIndex: 'chushengdi',
             key: 'chushengdi',
             ellipsis: true,
        },{
             title: '职业',
             dataIndex: 'zhiye',
             key: 'zhiye',
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
                this.setState({editVisible: true});
                this.setState({editBasic: record});
                console.log("record: "+record.xingming);
                console.log("state: "+this.state.editBasic.xingming);
                this.forceUpdate();
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

    // 获取病人基础信息
    async getBasicInfo(data){
        let {store} = this.props;
        let response = await getBasicInfo(data);
        if(response.code != null && response.code === 200){
            console.log(response);
            store.addPatientBasic(response.data);
        }else{
            console.log("获取病人基础信息失败");
        }
    }

    // 初始化页面加载数据
    componentDidMount() {
        this.getBasicInfo(null);
    }

    // 监听表单值得改变
    handleChange = (key, event) => {
        let form = this.state.tempBasic;
        for (let item in this.state.tempBasic) {
            if (item === key) {
                form[item] = event.target.value;
                this.setState({tempBasic: form})
            }
        }
    };
    editChange = (key, event) => {
        let form = this.state.editBasic;
        for (let item in this.state.editBasic) {
            if (item === key) {
                form[item] = event.target.value;
                this.setState({editBasic: form})
            }
        }
    };

    // 添加病人
    async addPatient(){
        let response = await addBasicInfo(this.state.temp);
        if(response.code != null && response.code === 200){
            alert("添加数据成功");
        }else{
            console.log("添加数据失败");
            alert("添加数据失败");
        }
    }

    // 搜索
    search = value => {
        let {store} = this.props;
        if(value !== ''){
            this.getBasicInfo({"xingming": value});
        }else{
            this.getBasicInfo(null);
        }
        console.log(store.patientBasic);
    };

    async editBasicInfo(){
        console.log(this.state.editBasic);
        let response = await editBasicInfo(this.state.editBasic);
        console.log(response);
        if(response.code !== null && response.code===200){
            alert("修改成功")
        }else{
            alert("修改失败");
        }
    }

    // 分页
    pagination(page){
        console.log(page);
    }

    render() {
        let {store} = this.props;
        return (
            <div style={{height: "100%"}}>
                <div className="button-header">
                    <Row>
                        <Col xs={1}>
                            <Button type="primary" style={{padding: "0px 5px"}} onClick={() => this.setState({modalVisible: true})}>
                                <Icon type="plus" />添加
                            </Button>
                        </Col>
                        <Col xs={{span: 6, offset:17}}>
                            <Search placeholder="input search text" onSearch={value => this.search(value)} enterButton onChange={event => this.search(event.target.value)} />
                        </Col>
                    </Row>
                    <Modal title="添加病人信息"
                           centered
                           visible={this.state.modalVisible}
                           onOk={() => {this.setState({modalVisible: false}); this.addPatient()}}
                           onCancel={() => {this.setState({modalVisible: false, tempBasic: {}});}}>
                        <Form layout="inline">
                            <Form.Item label="姓  名" hasFeedback>
                                <Input allowClear placeholder="姓名" required value={this.state.tempBasic.xingming} onChange={this.handleChange.bind(this, "xingming")} />
                            </Form.Item>
                            <Form.Item label="住院号" hasFeedback>
                                <Input allowClear placeholder="住院号" required value={this.state.tempBasic.no} onChange={this.handleChange.bind(this, "no")} />
                            </Form.Item>
                            <Form.Item label="年  龄" hasFeedback>
                                <Input allowClear placeholder="年龄" value={this.state.tempBasic.nianling} onChange={this.handleChange.bind(this, "nianling")} />
                            </Form.Item>
                            <Form.Item label="性  别" hasFeedback>
                                <Input allowClear placeholder="性别" value={this.state.tempBasic.xingbie} onChange={this.handleChange.bind(this, "xingbie")} />
                            </Form.Item>
                            <Form.Item label="民  族" hasFeedback>
                                <Input allowClear placeholder="民族" value={this.state.tempBasic.minzu} onChange={this.handleChange.bind(this, "minzu")} />
                            </Form.Item>
                            <Form.Item label="婚  姻" hasFeedback>
                                <Input allowClear placeholder="婚姻" value={this.state.tempBasic.hunyin} onChange={this.handleChange.bind(this, "hunyin")} />
                            </Form.Item>
                            <Form.Item label="出生地" hasFeedback>
                                <Input allowClear placeholder="出生地" value={this.state.tempBasic.chushengdi} onChange={this.handleChange.bind(this, "chushengdi")} />
                            </Form.Item>
                            <Form.Item label="职  业" hasFeedback>
                                <Input allowClear placeholder="职业" value={this.state.tempBasic.zhiye} onChange={this.handleChange.bind(this, "zhiye")} />
                            </Form.Item>
                        </Form>
                    </Modal>
                    <Modal title="编辑病人信息"
                           centered
                           visible={this.state.editVisible}
                           onOk={() => {this.setState({editVisible: false}); this.editBasicInfo()}}
                           onCancel={() => {this.setState({editVisible: false})}}>
                        <Form layout="inline">
                            <Form.Item label="姓  名" hasFeedback>
                                <Input allowClear placeholder="姓名" required value={this.state.editBasic.xingming} onChange={this.editChange.bind(this, "xingming")} />
                            </Form.Item>
                            <Form.Item label="住院号" hasFeedback>
                                <Input allowClear placeholder="住院号" disabled value={this.state.editBasic.no} onChange={this.editChange.bind(this, "no")}/>
                            </Form.Item>
                            <Form.Item label="年  龄" hasFeedback>
                                <Input allowClear placeholder="年龄" value={this.state.editBasic.nianling} onChange={this.editChange.bind(this, "nianling")} />
                            </Form.Item>
                            <Form.Item label="性  别" hasFeedback>
                                <Input allowClear placeholder="性别" value={this.state.editBasic.xingbie} onChange={this.editChange.bind(this, "xingbie")} />
                            </Form.Item>
                            <Form.Item label="民  族" hasFeedback>
                                <Input allowClear placeholder="民族" value={this.state.editBasic.minzu} onChange={this.editChange.bind(this, "minzu")} />
                            </Form.Item>
                            <Form.Item label="婚  姻" hasFeedback>
                                <Input allowClear placeholder="婚姻" value={this.state.editBasic.hunyin} onChange={this.editChange.bind(this, "hunyin")} />
                            </Form.Item>
                            <Form.Item label="出生地" hasFeedback>
                                <Input allowClear placeholder="出生地" value={this.state.editBasic.chushengdi} onChange={this.editChange.bind(this, "chushengdi")} />
                            </Form.Item>
                            <Form.Item label="职  业" hasFeedback>
                                <Input allowClear placeholder="职业" value={this.state.editBasic.zhiye} onChange={this.editChange.bind(this, "zhiye")} />
                            </Form.Item>
                        </Form>
                    </Modal>
                </div>
                <div className="table-container" style={{ padding: "10px 0px 0px 0px", height: "100%" }}>
                    <Table
                        rowKey={ record => record.no}
                        size="small"
                        bordered
                        style={{ height: "100%" }}
                        columns={this.columns}
                        dataSource={store.patientBasic}
                        pagination={{
                            size: "small",
                            total: 500
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default UserManage;

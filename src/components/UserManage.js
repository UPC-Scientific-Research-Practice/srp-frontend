import React from 'react';
import { Modal, Button, Table, Icon, Input, Row, Col, Form, Select, DatePicker } from 'antd';

import "./UserManage.css";
import {inject, observer} from "mobx-react";

import moment from "moment";

import {getBasicInfo, addBasicInfo, editBasicInfo} from "../api";
const { Search } = Input;
const {Option} = Select;

@inject("store")
@observer
class UserManage extends React.Component {
    state = {
        addOrUpdate: "add",
        visible: false,
        basic: {
            fenzhongxin: "", zhuyuanhao: "", xingming: "", zhuyuancishu: "", xingbie: "男",
            nianling: "", chushengriqi: "", guoji: "", jiguan: "", minzu: "",
            shenfenzhenghao: "", zhiye:"", zhuzhi:"", lianxidianhua:""
        }
    };

    columns = [
        {
            title: '姓名', dataIndex: 'xingming', key: 'xingming', ellipsis: true, fixed: "left",width: 100
        },{
            title: '分中心', dataIndex: 'fenzhongxin', key: 'fenzhongxin', ellipsis: true,
        },{
            title: '住院号', dataIndex: 'zhuyuanhao', key: 'zhuyuanhao', ellipsis: true,
        },{
            title: '住院次数', dataIndex: 'zhuyuancishu', key: 'zhuyuancishu', ellipsis: true,
        },{
            title: '性别', dataIndex: 'xingbie', key: 'xingbie', ellipsis: true,
        },{
            title: '年龄', dataIndex: 'nianling', key: 'nianling', ellipsis: true,
        },{
            title: '出生日期', dataIndex: 'chushengriqi', key: 'chushengriqi', ellipsis: true,
        },{
            title: '国籍', dataIndex: 'guoji', key: 'guoji', ellipsis: true,
        },{
            title: '籍贯', dataIndex: 'jiguan', key: 'jiguan', ellipsis: true,
        },{
            title: '民族', key: 'minzu', dataIndex: 'minzu', ellipsis: true
        },{
            title: '身份证号', dataIndex: 'shenfenzhenghao', key: 'shenfenzhenghao', ellipsis: true,
        },{
            title: '职业', dataIndex: 'zhiye', key: 'zhiye', ellipsis: true,
        },{
            title: '住址', dataIndex: 'zhuzhi', key: 'zhuzhi', ellipsis: true,
        },{
            title: '联系电话', dataIndex: 'lianxidianhua', key: 'lianxidianhua', ellipsis: true,
        },{
            title: '操作', key: 'action', fixed: "right",width: 100,
            render: (text, record) => (
                <span>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a onClick={()=>{this.operation(record, "edit")}}>修改</a>
                </span>
            ),
        },
    ];

    // 处理操作请求，例如：编辑，删除，查看
    operation(record, action){
        switch (action) {
            case "edit":
                this.setState({addOrUpdate: "edit", visible: true, basic: record});
                this.forceUpdate();
                break;
            default:
                break;
        }
    }

    // 获取病人基础信息
    async getBasicInfo(data){
        let {store} = this.props;
        let response = await getBasicInfo(data);
        if(response != null && response.code != null && response.code === 200){
            store.addPatientBasic(response.data);
        }else{
            console.log("获取病人基础信息失败");
        }
    }
    // 添加病人
    async addPatient(){
        let response = await addBasicInfo(this.state.temp);
        if(response != null && response.code != null && response.code === 200){
            alert("添加数据成功");
        }else{
            console.log("添加数据失败");
            alert("添加数据失败");
        }
    }
    // 编辑病人基本信息
    async editBasicInfo(){
        console.log(this.state.editBasic);
        let response = await editBasicInfo(this.state.editBasic);
        if(response != null && response.code !== null && response.code===200){
            alert("修改成功")
        }else{
            alert("修改失败");
        }
    }

    // 初始化页面加载数据
    componentDidMount() {
        this.getBasicInfo(null);
    }

    // 监听表单值得改变
    handleChange = (key, event) => {
        let form = this.state.basic;
        for (let item in this.state.basic) {
            if (item === key) {
                form[item] = event.target.value;
                this.setState({basic: form})
            }
        }
    };

    // 添加或者修改病人基本信息
    addOrUpload = () => {
        if(this.state.addOrUpdate ===  "add"){
            this.addPatient();
        }
        if(this.state.addOrUpdate ===  "edit"){
            this.editBasicInfo();
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
                            <Button type="primary" style={{padding: "0px 5px"}} onClick={() => this.setState({visible: true, addOrUpdate: "add"})}>
                                <Icon type="plus" />添加
                            </Button>
                        </Col>
                        <Col xs={{span: 6, offset:17}}>
                            <Search placeholder="input search text" onSearch={value => this.search(value)} enterButton onChange={event => this.search(event.target.value)} />
                        </Col>
                    </Row>
                    <Modal title="添加/编辑病人信息"
                           width={920}
                           centered
                           visible={this.state.visible}
                           onOk={() => {this.setState({visible: false}); this.addOrUpload()}}
                           onCancel={() => {this.setState({visible: false, basic: {}});}}>
                        <Form layout="inline">
                            <Form.Item label="分中心" hasFeedback>
                                <Input allowClear placeholder="分中心" required value={this.state.basic.fenzhongxin} onChange={this.handleChange.bind(this, "fenzhongxin")} />
                            </Form.Item>
                            <Form.Item label="住院号" hasFeedback>
                                <Input allowClear placeholder="住院号" required value={this.state.basic.zhuyuanhao} onChange={this.handleChange.bind(this, "zhuyuanhao")} />
                            </Form.Item>
                            <Form.Item label="姓名" hasFeedback>
                                <Input allowClear placeholder="姓名" required value={this.state.basic.xingming} onChange={this.handleChange.bind(this, "xingming")} />
                            </Form.Item>
                            <Form.Item label="住院次数" hasFeedback>
                                <Input allowClear placeholder="住院次数" value={this.state.basic.zhuyuancishu} onChange={this.handleChange.bind(this, "zhuyuancishu")} />
                            </Form.Item>
                            <Form.Item label="性别" hasFeedback>
                                <Select placeholder="性别" onChange={(value) => {
                                    let form = this.state.basic;
                                    form["xingbie"] = value;
                                    this.setState({basic: form});
                                }} >
                                    <Option value="男">男</Option>
                                    <Option value="女">女</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label="年龄" hasFeedback>
                                <Input allowClear placeholder="年龄" value={this.state.basic.nianling} onChange={this.handleChange.bind(this, "nianling")} />
                            </Form.Item>
                            <Form.Item label="出生日期" hasFeedback>
                                <DatePicker
                                    value={this.state.basic.chushengriqi!==""?moment(this.state.basic.chushengriqi, "YYYYMMDD"): null}
                                    onChange={(value) => {
                                        let form = this.state.basic;
                                        form["chushengriqi"] = value;
                                        this.setState({basic: form});
                                    }
                                }/>
                            </Form.Item>
                            <Form.Item label="国籍" hasFeedback>
                                <Input allowClear placeholder="国籍" value={this.state.basic.guoji} onChange={this.handleChange.bind(this, "guoji")} />
                            </Form.Item>
                            <Form.Item label="籍贯" hasFeedback>
                                <Input allowClear placeholder="籍贯" value={this.state.basic.jiguan} onChange={this.handleChange.bind(this, "jiguan")} />
                            </Form.Item>
                            <Form.Item label="民族" hasFeedback>
                                <Input allowClear placeholder="民族" value={this.state.basic.minzu} onChange={this.handleChange.bind(this, "minzu")} />
                            </Form.Item>
                            <Form.Item label="身份证号" hasFeedback>
                                <Input allowClear placeholder="身份证号" required value={this.state.basic.shenfenzhenghao} onChange={(event) => {
                                        let form = this.state.basic;
                                        form["shenfenzhenghao"] = event.target.value;
                                        let str = event.target.value;
                                        if(str.length >= 14){
                                            let birth = str.slice(6, 10);
                                            let birthday = str.slice(6, 14);
                                            let date = new Date();
                                            let year = date.getFullYear();
                                            form["nianling"] = year - birth;
                                            form["chushengriqi"] = birthday;
                                        }
                                        this.setState({basic: form});
                                        console.log(this.state.basic.chushengriqi)
                                    }
                                } />
                            </Form.Item>
                            <Form.Item label="职业" hasFeedback>
                                <Input allowClear placeholder="职业" value={this.state.basic.zhiye} onChange={this.handleChange.bind(this, "zhiye")} />
                            </Form.Item>
                            <Form.Item label="住址" hasFeedback>
                                <Input allowClear placeholder="住址" value={this.state.basic.zhuzhi} onChange={this.handleChange.bind(this, "zhuzhi")} />
                            </Form.Item>
                            <Form.Item label="联系电话" hasFeedback>
                                <Input allowClear placeholder="联系电话" value={this.state.basic.lianxidianhua} onChange={this.handleChange.bind(this, "lianxidianhua")} />
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
                        scroll={{ x: 1500 }}
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

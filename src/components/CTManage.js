import React from 'react';
import {Modal, Button, Icon, Input, Row, Col, List, Card,
    Pagination, Form, Select, Upload, Checkbox} from 'antd';

import "./CTManage.css";
import {CTview, getBasicInfo, download, upload} from "../api";
import {inject, observer} from "mobx-react";

const { Search } = Input;
const {Option} = Select;


@inject("store")
@observer
class CTManage extends React.Component {
    state = {
        modalVisible: false,
        patientList: [],
        checkedList: [],
        list: [],
        id: "",
        name: ""
    };

    async getCT(data){
        let {store} = this.props;
        let response = await CTview(data);
        if(response != null && response.code === 200){
            console.log(response.data);
            store.addData(response.data);
        }else{
            console.log("获取CT数据失败");
        }
    }

    async getPatientList(){
        let response = await getBasicInfo(null);
        if(response != null && response.code !== null && response.code === 200){
            this.setState({patientList: response.data});
        }
    }

    componentDidMount(){
        this.getCT(null);
        this.getPatientList();
    }

    // 弹出修改，查看框
    setModalVisible(modalVisible) {
        this.setState({ modalVisible });
    }

    check = (check) => {
        let {store} = this.props;
        store.addOrRemove(check);
    };

    async download(params){
        let response = await download(params);
        if(response !== null){
            const blob = response;
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onload = (e) => {
                const a = document.createElement('a');
                a.download = params.filename;
                // 后端设置的文件名称在res.headers的 "content-disposition": "form-data; name=\"attachment\"; filename=\"20181211191944.zip\"",
                a.href = e.target.result;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }
        }else{
            alert("下载失败");
        }

    }

    uploadChange = (value) => {
        let temp = this.state.list;
        temp.push(value.file);
        this.setState({list: temp});
    };

    async upload(formData, data){
        let response = await upload(formData, data);
        console.log(response);
        alert("上传成功");
        // if(response != null && response.code !== null && response.code === 200){
        //     alert("上传成功");
        // }else{
        //     alert("上传失败");
        // }
    }

    submitUpload = () => {
        let data = {"name": this.state.name, "id": this.state.id};
        let formData = new FormData();
        this.state.list.forEach((item) => {
            console.log(item);
            formData.append('file', item);
        });
        console.log(data);
        this.upload(formData, data);
    };

    submit = () => {
        let {store} = this.props;
        console.log(store.check);
        if(store.check.length <= 0){
            alert("请选择下载文件");
        }else if(store.check.length > 1){
            let params = {"filename": "images.zip", "list": store.check};
            this.download(params);
        }else{
            let params = {"filename": store.check[0].filename, "list": store.check};
            this.download(params);
        }
    };

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
                            <Button type="primary" style={{padding: "0px 5px"}} onClick={() => {this.setState({modalVisible: true})}}>
                                <Icon type="plus" />添加
                            </Button>
                        </Col>
                        <Col xs={{span: 1, offset:1}}>
                            <Button type="primary" style={{padding: "0px 5px"}} onClick={() => {this.submit()}}>
                                <Icon type="plus" />下载
                            </Button>
                        </Col>
                        <Col xs={{span: 6, offset:17}}>
                            <Search placeholder="input search text" style={{}} onSearch={value => console.log(value)} enterButton />
                        </Col>
                    </Row>
                    <Modal title="添加CT图片"
                           centered
                           visible={this.state.modalVisible}
                           onOk={() => {this.setModalVisible(false);this.submitUpload()}}
                           onCancel={() => this.setModalVisible(false)}>
                        <Form layout="horizontal">
                            <Form.Item label="姓名" hasFeedback>
                                <Select defaultValue="1" onChange={(value) => {const arr = value.split(","); this.setState({id:arr[0],name:arr[1]})}}>
                                    {this.state.patientList.map((item, index) =>
                                        <Option key={item.zhuyuanhao} value={item.zhuyuanhao+","+item.xingming}>{item.xingming}</Option>)}
                                </Select>
                            </Form.Item>
                            <Form.Item label="文件" hasFeedback>
                                <Upload
                                    beforeUpload={()=>{return false}}
                                    onChange={(value) => {this.uploadChange(value)}}
                                    multiple={true}>
                                    <Button>
                                        <Icon type="upload" /> Upload
                                    </Button>
                                </Upload>
                            </Form.Item>
                        </Form>
                    </Modal>
                </div>
                <div className="record" style={{ padding: "10px 0px 0px 0px", height: "100%" }}>
                    <List
                        grid={{gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3,}}
                        dataSource={store.ct}
                        renderItem={item => (
                            <List.Item>
                                <Card hoverable
                                      key={item.id}
                                      style={{ width: 180, height: 240 }}
                                      cover={<img alt="Record" height={180} width={100} src={item.url} />}
                                      actions={[<Checkbox onChange={()=> {this.check(item)}}>{item.filename}</Checkbox>,]}
                                >
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

export default CTManage;

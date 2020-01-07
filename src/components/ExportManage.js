import React from 'react';
import {Button, Icon, Row, Col, Form, Select} from 'antd';

import {export2Excel, getBasicInfo} from "../api";
import {inject, observer} from "mobx-react";

const {Option} = Select;

@inject("store")
@observer
class ExportManage extends React.Component {
    state = {
        patientList: [],
        value: []
    };

    async getPatientList(){
        let response = await getBasicInfo(null);
        if(response.code !== null && response.code === 200){
            this.setState({patientList: response.data});
        }
    }
    componentDidMount(){
        this.getPatientList();
    }
    handleChange(value){
        this.setState({value: value});
    }

    async export2Excel(data){
        let response = await export2Excel(data);
        if(response !== null){
            console.log("导出成功");
            const blob = response;
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onload = (e) => {
                const a = document.createElement('a');
                a.download = `导出资料.xls`;
                // 后端设置的文件名称在res.headers的 "content-disposition": "form-data; name=\"attachment\"; filename=\"20181211191944.zip\"",
                a.href = e.target.result;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }
        }else{
            alert("导出失败");
        }
    }

    // 导出数据
    submit = () => {
        this.export2Excel(this.state.value);
    };

    render() {
        return (
            <div style={{height: "100%"}}>
                <div className="button-header">
                    <Row>
                        <Col xs={1}>
                            <Button type="primary" style={{padding: "0px 5px"}} onClick={() => {this.submit()}}>
                                <Icon type="plus" />导出
                            </Button>
                        </Col>
                    </Row>
                    <Form layout="horizontal">
                        <Form.Item label="姓名" hasFeedback>
                            <Select
                                mode="multiple"
                                style={{ width: '100%' }}
                                placeholder="请选择需要导出数据的人"
                                allowClear={true}
                                onChange={(value)=>this.handleChange(value)}>
                                {this.state.patientList.map((item,index) =>
                                    <Option key={item.no} value={item.no}>{item.xingming}</Option>
                                )}
                            </Select>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}

export default ExportManage;

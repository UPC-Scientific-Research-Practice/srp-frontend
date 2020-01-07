import React from 'react';
import {Modal, Button, Divider, Table, Icon, Input, Row, Col, Form, DatePicker} from 'antd';
import {editAllInfo, getAllInfo} from "../api";
import {inject, observer} from "mobx-react";

const { Search } = Input;

@inject("store")
@observer
class RecordManage extends React.Component {
    state = {
        modalVisible: false,
        disable: false,
        temp: { xingming: "", no: "", naojiye: "",xuechanggui: "", changguiniaoye: "", xuetangjiancha: "", MRI: "", MRA: "",
            naoxueguanzaoying: "", shuzijianying: "", jingluduopule: "", cigongzhen: "", luneiya: "", shenjingxitong: "",
            xueyeshenghua: "", ningxuegongneng: "", xiongbuxxian: "", naochuxueleixing: "", chuxueweizhi: "", chuxueyuanyin: "",
            chuxuetiji: "", chuxueliang: "", xuezhongxingtai: "", naoneiqingkuang: "", fabingshijian: "", shishijijiucuoshi: "",
            shifouyinjiu: "", bingrendezhuangtai: "", naobuct: "", shoushushijian: "", xindiantushuju: "", fabingqianhuodong: "",
            bingfazheng: "", tizheng: "", bingshi: "", tufaqingkuang: "", beixuanfangan: "", shoushushichang: "", shoushutizheng: "",
            mazuijiliang: "", shuzhongyongyao: "", shoushuxiaoguo: "",  zhuyuanshichang: "", shuhouyongyao: "", huifuzhuangtai: "",
            chuyuanzhuangtai: "", shentizhibiaobianhua: "", yingyangsheru: "", bingrenzhuangtai: "", fuchaqingkuang: "", fanganxiugai: ""
        }
    };

    columns = [
        {
            title: '住院号',
            dataIndex: 'no',
            key: 'no',
            ellipsis: true,
            width: 100,
            fixed: 'left',
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            render: (text, record) => (<a onClick={() => this.operation(record, "view")}>{text}</a>),
        },{
            title: '姓名',
            dataIndex: 'xingming',
            key: 'xingming',
            ellipsis: true,
            width: 100,
            fixed: 'left',
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            render: (text, record) => (<a onClick={() => this.operation(record, "view")}>{text}</a>),
        },{
            title: '脑脊液检查数据',
            dataIndex: 'naojiye',
            key: 'naojiye',
        },{
            title: '血常规数据',
            dataIndex: 'xuechanggui',
            key: 'xuechanggui',
            ellipsis: true,
        },{
            title: '常规尿液数据',
            key: 'changguiniaoye',
            dataIndex: 'changguiniaoye',
            ellipsis: true
        },{
            title: '血糖检查数据',
            dataIndex: 'xuetangjiancha',
            key: 'xuetangjiancha',
            ellipsis: true,
        },{
            title: 'MRI数据',
            dataIndex: 'MRI',
            key: 'MRI',
            ellipsis: true,
        },{
            title: 'MRA数据',
            dataIndex: 'MRA',
            key: 'MRA',
            ellipsis: true,
        },{
            title: '脑血管造影数据',
            dataIndex: 'naoxueguanzaoying',
            key: 'naoxueguanzaoying',
            ellipsis: true,
        },{
            title: '数字减影血管造影数据',
            dataIndex: 'shuzijianying',
            key: 'shuzijianying',
            ellipsis: true,
        },{
            title: '经颅多普勒超声检查数据',
            dataIndex: 'jingluduopule',
            key: 'jingluduopule',
            ellipsis: true,
        },{
            title: '磁共振检查数据',
            dataIndex: 'cigongzhen',
            key: 'cigongzhen',
            ellipsis: true,
        },{
            title: '颅内压',
            dataIndex: 'luneiya',
            key: 'luneiya',
            ellipsis: true,
        },{
            title: '神经系统变化',
            dataIndex: 'shenjingxitong',
            key: 'shenjingxitong',
            ellipsis: true,
        },{
            title: '血液生化',
            dataIndex: 'xueyeshenghua',
            key: 'xueyeshenghua',
            ellipsis: true,
        },{
            title: '凝血功能',
            dataIndex: 'ningxuegongneng',
            key: 'ningxuegongneng',
            ellipsis: true,
        },{
            title: '胸部X线检查',
            dataIndex: 'xiongbuxxian',
            key: 'xiongbuxxian',
            ellipsis: true,
        },{
            title: '脑出血类型',
            dataIndex: 'naochuxueleixing',
            key: 'naochuxueleixing',
            ellipsis: true,
        },{
            title: '出血位置',
            dataIndex: 'chuxueweizhi',
            key: 'chuxueweizhi',
            ellipsis: true,
        },{
            title: '出血原因',
            dataIndex: 'chuxueyuanyin',
            key: 'chuxueyuanyin',
            ellipsis: true,
        },{
            title: '出血体积',
            dataIndex: 'chuxuetiji',
            key: 'chuxuetiji',
            ellipsis: true,
        },{
            title: '出血量',
            dataIndex: 'chuxueliang',
            key: 'chuxueliang',
            ellipsis: true,
        },{
            title: '血肿形态',
            dataIndex: 'xuezhongxingtai',
            key: 'xuezhongxingtai',
            ellipsis: true,
        },{
            title: '脑内状况',
            dataIndex: 'naoneiqingkuang',
            key: 'naoneiqingkuang',
            ellipsis: true,
        },{
            title: '发病时间',
            dataIndex: 'fabingshijian',
            key: 'fabingshijian',
            ellipsis: true,
        },{
            title: '实施急救措施',
            dataIndex: 'shishijijiucuoshi',
            key: 'shishijijiucuoshi',
            ellipsis: true,
        },{
            title: '是否饮酒',
            dataIndex: 'shifouyinjiu',
            key: 'shifouyinjiu',
            ellipsis: true,
        },{
            title: '病人的状态',
            dataIndex: 'bingrendezhuangtai',
            key: 'bingrendezhuangtai',
            ellipsis: true,
        },{
            title: '脑部CT数据',
            dataIndex: 'naobuct',
            key: 'naobuct',
            ellipsis: true,
        },{
            title: '手术时间',
            dataIndex: 'shoushushijian',
            key: 'shoushushijian',
            ellipsis: true,
        },{
            title: '心电图数据',
            dataIndex: 'xindiantushuju',
            key: 'xindiantushuju',
            ellipsis: true,
        },{
            title: '发病前有哪些活动',
            dataIndex: 'fabingqianhuodong',
            key: 'fabingqianhuodong',
            ellipsis: true,
        },{
            title: '并发症',
            dataIndex: 'bingfazheng',
            key: 'bingfazheng',
            ellipsis: true,
        },{
            title: '病人的体征状况数据',
            dataIndex: 'tizheng',
            key: 'tizheng',
            ellipsis: true,
        },{
            title: '相关病史',
            dataIndex: 'bingshi',
            key: 'bingshi',
            ellipsis: true,
        },{
            title: '手术中的突发情况',
            dataIndex: 'tufaqingkuang',
            key: 'tufaqingkuang',
            ellipsis: true,
        },{
            title: '手术的所有备选方案',
            dataIndex: 'beixuanfangan',
            key: 'beixuanfangan',
            ellipsis: true,
        },{
            title: '手术时长',
            dataIndex: 'shoushushichang',
            key: 'shoushushichang',
            ellipsis: true,
        },{
            title: '手术过程中的体征状况',
            dataIndex: 'shoushutizheng',
            key: 'shoushutizheng',
            ellipsis: true,
        },{
            title: '麻醉剂量',
            dataIndex: 'mazuijiliang',
            key: 'mazuijiliang',
            ellipsis: true,
        },{
            title: '术中用药',
            dataIndex: 'shuzhongyongyao',
            key: 'shuzhongyongyao',
            ellipsis: true,
        },{
            title: '手术效果',
            dataIndex: 'shoushuxiaoguo',
            key: 'shoushuxiaoguo',
            ellipsis: true,
        },{
            title: '住院的时长',
            dataIndex: 'zhuyuanshichang',
            key: 'zhuyuanshichang',
            ellipsis: true,
        },{
            title: '术后用药',
            dataIndex: 'shuhouyongyao',
            key: 'shuhouyongyao',
            ellipsis: true,
        },{
            title: '恢复状态',
            dataIndex: 'huifuzhuangtai',
            key: 'huifuzhuangtai',
            ellipsis: true,
        },{
            title: '出院时状态',
            dataIndex: 'chuyuanzhuangtai',
            key: 'chuyuanzhuangtai',
            ellipsis: true,
        },{
            title: '身体指标变化',
            dataIndex: 'shentizhibiaobianhua',
            key: 'shentizhibiaobianhua',
            ellipsis: true,
        },{
            title: '营养摄入',
            dataIndex: 'yingyangsheru',
            key: 'yingyangsheru',
            ellipsis: true,
        },{
            title: '病人状态',
            dataIndex: 'bingrenzhuangtai',
            key: 'bingrenzhuangtai',
            ellipsis: true,
        },{
            title: '复查情况',
            dataIndex: 'fuchaqingkuang',
            key: 'fuchaqingkuang',
            ellipsis: true,
        },{
            title: '方案修改',
            dataIndex: 'fanganxiugai',
            key: 'fanganxiugai',
            ellipsis: true,
        },{
            title: '操作',
            key: 'action',
            width: 100,
            fixed: 'right',
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
                this.setState({temp: record, modalVisible: true, disable: true});
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

    async getAllInfo(data){
        let {store} = this.props;
        let response = await getAllInfo(data);
        console.log(response);
        if(response.code !== null && response.code === 200){
            store.addRecord(response.data);
        }else{
            console.log("获取详细信息失败");
        }
    }

    componentDidMount(){
        this.getAllInfo(null);
    }

    // 处理改变
    editChange = (key, event) => {
        let form = this.state.temp;
        for (let item in this.state.temp) {
            if (item === key) {
                form[item] = event.target.value;
                this.setState({temp: form})
            }
        }
    };

    // 搜索
     search = value => {
         if(value !== ''){
             this.getAllInfo({"xingming": value});
         }else{
             this.getAllInfo(null);
         }
     };

    async editAllInfo(){
        console.log(this.state.temp);
        let response = await editAllInfo(this.state.temp);
        if(response.code !==null && response.code ===200){
            alert("修改成功");
        }else{
            alert("修改失败");
        }
    }

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
                            <Search placeholder="input search text" style={{}} onSearch={value => this.search(value)} enterButton onChange={event => this.search(event.target.value)}/>
                        </Col>
                    </Row>
                    <Modal title="添加/修改病人信息"
                           centered
                           visible={this.state.modalVisible}
                           onOk={() => {this.setState({modalVisible: false, disable: false}); this.editAllInfo()}}
                           onCancel={() => {this.setState({modalVisible: false, temp: {}, disable: false})}}>
                        <Form layout="inline">
                            <Form.Item label="住院号" hasFeedback>
                                <Input allowClear placeholder="住院号" disabled={this.state.disable} value={this.state.temp.no} onChange={this.editChange.bind(this, "no")} />
                            </Form.Item>
                            <Form.Item label="姓  名" hasFeedback>
                                <Input allowClear placeholder="姓名" required value={this.state.temp.xingming} onChange={this.editChange.bind(this, "xingming")}/>
                            </Form.Item>
                            <Form.Item label="脑脊液检查数据" hasFeedback>
                                <Input allowClear placeholder="脑脊液检查数据" value={this.state.temp.naojiye} onChange={this.editChange.bind(this, "naojiye")} />
                            </Form.Item>
                            <Form.Item label="血常规数据" hasFeedback>
                                <Input allowClear placeholder="血常规数据" value={this.state.temp.xuechanggui} onChange={this.editChange.bind(this, "xuechanggui")} />
                            </Form.Item>
                            <Form.Item label="常规尿液数据" hasFeedback>
                                <Input allowClear placeholder="常规尿液数据" value={this.state.temp.changguiniaoye} onChange={this.editChange.bind(this, "changguiniaoye")} />
                            </Form.Item>
                            <Form.Item label="血糖检查数据" hasFeedback>
                                <Input allowClear placeholder="血糖检查数据" value={this.state.temp.xuetangjiancha} onChange={this.editChange.bind(this, "xuetangjiancha")} />
                            </Form.Item>
                            <Form.Item label="MRI数据" hasFeedback>
                                <Input allowClear placeholder="MRI数据" value={this.state.temp.MRI} onChange={this.editChange.bind(this, "MRI")} />
                            </Form.Item>
                            <Form.Item label="MRA数据" hasFeedback>
                                <Input allowClear placeholder="MRA数据" value={this.state.temp.MRA} onChange={this.editChange.bind(this, "MRA")} />
                            </Form.Item>
                            <Form.Item label="脑血管造影数据" hasFeedback>
                                <Input allowClear placeholder="脑血管造影数据" value={this.state.temp.naoxueguanzaoying} onChange={this.editChange.bind(this, "naoxueguanzaoying")} />
                            </Form.Item>
                            <Form.Item label="数字减影血管造影数据" hasFeedback>
                                <Input allowClear placeholder="数字减影血管造影数据" value={this.state.temp.shuzijianying} onChange={this.editChange.bind(this, "shuzijianying")} />
                            </Form.Item>
                            <Form.Item label="经颅多普勒超声检查数据" hasFeedback>
                                <Input allowClear placeholder="经颅多普勒超声检查数据" value={this.state.temp.jingluduopule} onChange={this.editChange.bind(this, "jingluduopule")} />
                            </Form.Item>
                            <Form.Item label="磁共振检查数据" hasFeedback>
                                <Input allowClear placeholder="磁共振检查数据" value={this.state.temp.cigongzhen} onChange={this.editChange.bind(this, "cigongzhen")} />
                            </Form.Item>
                            <Form.Item label="颅内压" hasFeedback>
                                <Input allowClear placeholder="颅内压" value={this.state.temp.luneiya} onChange={this.editChange.bind(this, "luneiya")} />
                            </Form.Item>
                            <Form.Item label="神经系统变化" hasFeedback>
                                <Input allowClear placeholder="神经系统变化" value={this.state.temp.shenjingxitong} onChange={this.editChange.bind(this, "shenjingxitong")} />
                            </Form.Item>
                            <Form.Item label="血液生化" hasFeedback>
                                <Input allowClear placeholder="血液生化" value={this.state.temp.xueyeshenghua} onChange={this.editChange.bind(this, "xueyeshenghua")} />
                            </Form.Item>
                            <Form.Item label="凝血功能" hasFeedback>
                                <Input allowClear placeholder="凝血功能" value={this.state.temp.ningxuegongneng} onChange={this.editChange.bind(this, "ningxuegongneng")} />
                            </Form.Item>
                            <Form.Item label="胸部X线检查" hasFeedback>
                                <Input allowClear placeholder="胸部X线检查" value={this.state.temp.xiongbuxxian} onChange={this.editChange.bind(this, "xiongbuxxian")} />
                            </Form.Item>
                            <Form.Item label="脑出血类型" hasFeedback>
                                <Input allowClear placeholder="脑出血类型" value={this.state.temp.naochuxueleixing} onChange={this.editChange.bind(this, "naochuxueleixing")} />
                            </Form.Item>
                            <Form.Item label="出血位置" hasFeedback>
                                <Input allowClear placeholder="出血位置" value={this.state.temp.chuxueweizhi} onChange={this.editChange.bind(this, "chuxueweizhi")} />
                            </Form.Item>
                            <Form.Item label="出血原因" hasFeedback>
                                <Input allowClear placeholder="出血原因" value={this.state.temp.chuxueyuanyin} onChange={this.editChange.bind(this, "chuxueyuanyin")} />
                            </Form.Item>
                            <Form.Item label="出血体积" hasFeedback>
                                <Input allowClear placeholder="出血体积" value={this.state.temp.chuxuetiji} onChange={this.editChange.bind(this, "chuxuetiji")} />
                            </Form.Item>
                            <Form.Item label="出血量" hasFeedback>
                                <Input allowClear placeholder="出血量" value={this.state.temp.chuxueliang} onChange={this.editChange.bind(this, "chuxueliang")} />
                            </Form.Item>
                            <Form.Item label="血肿形态" hasFeedback>
                                <Input allowClear placeholder="血肿形态" value={this.state.temp.xuezhongxingtai} onChange={this.editChange.bind(this, "xuezhongxingtai")} />
                            </Form.Item>
                            <Form.Item label="脑内状况" hasFeedback>
                                <Input allowClear placeholder="脑内状况" value={this.state.temp.naoneiqingkuang} onChange={this.editChange.bind(this, "naoneiqingkuang")} />
                            </Form.Item>
                            <Form.Item label="发病时间" hasFeedback>
                                {/*<Input allowClear placeholder="发病时间" value={this.state.temp.fabingshijian} onChange={this.editChange.bind(this, "fabingshijian")} />*/}
                                <DatePicker style={{ width: '100%' }} />
                            </Form.Item>
                            <Form.Item label="实施急救措施" hasFeedback>
                                <Input allowClear placeholder="实施急救措施" value={this.state.temp.shishijijiucuoshi} onChange={this.editChange.bind(this, "shishijijiucuoshi")} />
                            </Form.Item>
                            <Form.Item label="是否饮酒" hasFeedback>
                                <Input allowClear placeholder="是否饮酒" value={this.state.temp.shifouyinjiu} onChange={this.editChange.bind(this, "shifouyinjiu")} />
                            </Form.Item>
                            <Form.Item label="病人的状态" hasFeedback>
                                <Input allowClear placeholder="病人的状态" value={this.state.temp.bingrendezhuangtai} onChange={this.editChange.bind(this, "bingrendezhuangtai")} />
                            </Form.Item>
                            <Form.Item label="脑部CT数据" hasFeedback>
                                <Input allowClear placeholder="脑部CT数据" value={this.state.temp.naobuct} onChange={this.editChange.bind(this, "naobuct")} />
                            </Form.Item>
                            <Form.Item label="手术时间" hasFeedback>
                                <Input allowClear placeholder="手术时间" value={this.state.temp.shoushushijian} onChange={this.editChange.bind(this, "shoushushijian")} />
                            </Form.Item>
                            <Form.Item label="心电图数据" hasFeedback>
                                <Input allowClear placeholder="心电图数据" value={this.state.temp.xindiantushuju} onChange={this.editChange.bind(this, "xindiantushuju")} />
                            </Form.Item>
                            <Form.Item label="发病前有哪些活动" hasFeedback>
                                <Input allowClear placeholder="发病前有哪些活动" value={this.state.temp.fabingqianhuodong} onChange={this.editChange.bind(this, "fabingqianhuodong")} />
                            </Form.Item>
                            <Form.Item label="并发症" hasFeedback>
                                <Input allowClear placeholder="并发症" value={this.state.temp.bingfazheng} onChange={this.editChange.bind(this, "bingfazheng")} />
                            </Form.Item>
                            <Form.Item label="病人的体征状况数据" hasFeedback>
                                <Input allowClear placeholder="病人的体征状况数据" value={this.state.temp.tizheng} onChange={this.editChange.bind(this, "tizheng")} />
                            </Form.Item>
                            <Form.Item label="相关病史" hasFeedback>
                                <Input allowClear placeholder="相关病史" value={this.state.temp.bingshi} onChange={this.editChange.bind(this, "bingshi")} />
                            </Form.Item>
                            <Form.Item label="手术中的突发情况" hasFeedback>
                                <Input allowClear placeholder="手术中的突发情况" value={this.state.temp.tufaqingkuang} onChange={this.editChange.bind(this, "tufaqingkuang")} />
                            </Form.Item>
                            <Form.Item label="手术的所有备选方案" hasFeedback>
                                <Input allowClear placeholder="手术的所有备选方案" value={this.state.temp.beixuanfangan} onChange={this.editChange.bind(this, "beixuanfangan")} />
                            </Form.Item>
                            <Form.Item label="手术实施方案" hasFeedback>
                                <Input allowClear placeholder="手术实施方案" value={this.state.temp.shishifangan} onChange={this.editChange.bind(this, "shishifangan")} />
                            </Form.Item>
                            <Form.Item label="手术时长" hasFeedback>
                                <Input allowClear placeholder="手术时长" value={this.state.temp.shoushushichang} onChange={this.editChange.bind(this, "shoushushichang")} />
                            </Form.Item>
                            <Form.Item label="手术过程中的体征状况" hasFeedback>
                                <Input allowClear placeholder="手术过程中的体征状况" value={this.state.temp.shoushutizheng} onChange={this.editChange.bind(this, "shoushutizheng")} />
                            </Form.Item>
                            <Form.Item label="麻醉剂量" hasFeedback>
                                <Input allowClear placeholder="麻醉剂量" value={this.state.temp.mazuijiliang} onChange={this.editChange.bind(this, "mazuijiliang")} />
                            </Form.Item>
                            <Form.Item label="术中用药" hasFeedback>
                                <Input allowClear placeholder="术中用药" value={this.state.temp.shuzhongyongyao} onChange={this.editChange.bind(this, "shuzhongyongyao")} />
                            </Form.Item>
                            <Form.Item label="手术效果" hasFeedback>
                                <Input allowClear placeholder="手术效果" value={this.state.temp.shoushuxiaoguo} onChange={this.editChange.bind(this, "shoushuxiaoguo")} />
                            </Form.Item>
                            <Form.Item label="住院的时长" hasFeedback>
                                <Input allowClear placeholder="住院的时长" value={this.state.temp.zhuyuanshichang} onChange={this.editChange.bind(this, "zhuyuanshichang")} />
                            </Form.Item>
                            <Form.Item label="术后用药" hasFeedback>
                                <Input allowClear placeholder="术后用药" value={this.state.temp.shuhouyongyao} onChange={this.editChange.bind(this, "shuhouyongyao")} />
                            </Form.Item>
                            <Form.Item label="恢复状态" hasFeedback>
                                <Input allowClear placeholder="恢复状态" value={this.state.temp.huifuzhuangtai} onChange={this.editChange.bind(this, "huifuzhuangtai")} />
                            </Form.Item>
                            <Form.Item label="出院时状态" hasFeedback>
                                <Input allowClear placeholder="出院时状态" value={this.state.temp.chuyuanzhuangtai} onChange={this.editChange.bind(this, "chuyuanzhuangtai")} />
                            </Form.Item>
                            <Form.Item label="身体指标变化" hasFeedback>
                                <Input allowClear placeholder="身体指标变化" value={this.state.temp.shentizhibiaobianhua} onChange={this.editChange.bind(this, "shentizhibiaobianhua")} />
                            </Form.Item>
                            <Form.Item label="营养摄入" hasFeedback>
                                <Input allowClear placeholder="营养摄入" value={this.state.temp.yingyangsheru} onChange={this.editChange.bind(this, "yingyangsheru")} />
                            </Form.Item>
                            <Form.Item label="病人状态" hasFeedback>
                                <Input allowClear placeholder="病人状态" value={this.state.temp.bingrenzhuangtai} onChange={this.editChange.bind(this, "bingrenzhuangtai")} />
                            </Form.Item>
                            <Form.Item label="复查情况" hasFeedback>
                                <Input allowClear placeholder="复查情况" value={this.state.temp.fuchaqingkuang} onChange={this.editChange.bind(this, "fuchaqingkuang")} />
                            </Form.Item>
                            <Form.Item label="方案修改" hasFeedback>
                                <Input allowClear placeholder="方案修改" value={this.state.temp.fanganxiugai} onChange={this.editChange.bind(this, "fanganxiugai")} />
                            </Form.Item>
                        </Form>
                    </Modal>
                </div>
                <div className="table-container" style={{ padding: "10px 0px 0px 0px", height: "100%" }}>
                    <Table
                        rowKey={record => record.no}
                        size="small"
                        bordered
                        style={{ height: "100%" }}
                        columns={this.columns}
                        dataSource={store.record}
                        scroll={{ x: 5000 }}
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

export default RecordManage;

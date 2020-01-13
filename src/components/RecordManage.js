import React from 'react';
import {Modal, Table, Input, Row, Col, Form} from 'antd';
import {editAllInfo, getAllInfo} from "../api";
import {inject, observer} from "mobx-react";
import formField from "../utils/variables";

const { Search } = Input;


@inject("store")
@observer
class RecordManage extends React.Component {
    state = {
        visible: false,
        temp: {
            xingming: "", fenzhongxin: "", zhuyuanhao: "", ruyuantujing: "", zhuyuantianshu: "", ruyuankebie: "", zhuankekebie: "",
            chuyuankebie: "", zhuyaozhenduan: "", zhuyaozhenduanbianma: "", qitazhenduan: "", qitazhenduanbianma: "",
            fabingshijian: "", zhuyaozhengzhuang: "", bansuizhengzhuang: "", jiwangshi: "", yaowuguomin: "", guominyaowu: "",
            xiyanshi: "", yinjiushi: "", gerenshi: "", jiazushi: "", xueya: "", yishishuiping: "", zhitiyundongjili: "",
            ganjuezhangai: "", yuyanbiaoda: "", shenjingfanshe: "", binglizheng: "", NIHSS: "", GLASGOW: "", ADL: "",
            MRANKIN: "", MMSE: "", LOTCA: "", chuxuebuwei: "", chuxuetiji: "", CTzhi: "", xinzangcaichao: "", LVEF: "",
            jingdongmaicaichao: "", xiongpian: "", xuebaixibao: "", zhongxing: "", linba: "", danhe: "", xuehongxibao: "",
            xuehongdanbai: "", xuexiaoban: "", niaobaixibao: "", niaohongxibao: "", niaodanbai: "", nongxibao: "",
            OB: "", gubing: "", gucao: "", zhuantaimei: "", zongdanbai: "", baidanbai: "", zongdanhongsu: "", zhijiedanhongsu: "",
            xuetang: "", zongdanguchun: "", ganyousanzhi: "", HDL: "", LDL: "", tanghuaxuehongdanbai: "", HCY: "",
            jigaiT: "", jigaiI: "", BNP: "", na: "", jia: "", lv: "", CO2: "", niaosu: "", jigan:"", niaosuan: "",
            T3: "", T4: "", TSH: "", guoyanghuawumei: "", qiudanbai: "", yigan: "", biaomiankangyuan: "", biaomiankangti: "",
            Ekangyuan: "", Ekangti: "", hexinkangti: "", binggan: "", meidu: "", HIV: "", PCT: "", CRP: "", naojiye:"", ABETA:"",
            TLR: "", NLR: "", shoushushijian: "", shoushufangshi: "", yaowuzhiliao: "", bingfazheng: "", luneiganran: "", feiyan: "",
            miniaoxiganran: "", shuhouNIHSS: "", shuhouGLASGOW: "", shuhouADL: "", shuhouMRANKIN: "", shuhouxueya: "",
            chuyuanxueya: "", chuyuanNIHSS: "", chuyuanGLASGOW: "", chuyuanADL: "", chuyuanMRANKIN: "", chuyuanMMSE: "", chuyuanLOTCA: "",
            di2zhouxueya:"", di2zhouyishishuiping:"", di2zhouzhitiyundongjili:"", di2zhouganjuezhangai:"", di2zhouyuyanbiaoda:"",
            di2zhoushenjingfanshe:"", di2zhoubinglizheng:"", di2zhouNIHSS:"", di2zhouGLASGOW:"", di2zhouADL:"", di2zhouMRANKIN:"",
            di3yuexueya:"", di3yueyishishuiping:"", di3yuezhitiyundongjili:"", di3yueganjuezhangai:"", di3yueyuyanbiaoda:"",
            di3yueshenjingfanshe:"", di3yuebinglizheng:"", di3yueNIHSS:"", di3yueGLASGOW:"", di3yueADL:"", di3yueMRANKIN:"",
            di6yuexueya:"", di6yueyishishuiping:"", di6yuezhitiyundongjili:"", di6yueganjuezhangai:"", di6yueyuyanbiaoda:"",
            di6yueshenjingfanshe:"", di6yuebinglizheng:"", di6yueNIHSS:"", di6yueGLASGOW:"", di6yueADL:"", di6yueMRANKIN:"",
            di1nianxueya:"", di1nianyishishuiping:"", di1nianzhitiyundongjili:"", di1nianganjuezhangai:"", di1nianyuyanbiaoda:"",
            di1nianshenjingfanshe:"", di1nianbinglizheng:"", di1nianNIHSS:"", di1nianGLASGOW:"", di1nianADL:"", di1nianMRANKIN:"",
            di3nianxueya:"", di3nianyishishuiping:"", di3nianzhitiyundongjili:"", di3nianganjuezhangai:"", di3nianyuyanbiaoda:"",
            di3nianshenjingfanshe:"", di3nianbinglizheng:"", di3nianNIHSS:"", di3nianGLASGOW:"", di3nianADL:"", di3nianMRANKIN:"",
            di5nianxueya:"", di5nianyishishuiping:"", di5nianzhitiyundongjili:"", di5nianganjuezhangai:"", di5nianyuyanbiaoda:"",
            di5nianshenjingfanshe:"", di5nianbinglizheng:"", di5nianNIHSS:"", di5nianGLASGOW:"", di5nianADL:"", di5nianMRANKIN:"",
            di10nianxueya:"", di10nianyishishuiping:"", di10nianzhitiyundongjili:"", di10nianganjuezhangai:"", di10nianyuyanbiaoda:"",
            di10nianshenjingfanshe:"", di10nianbinglizheng:"", di10nianNIHSS:"", di10nianGLASGOW:"", di10nianADL:"", di10nianMRANKIN:"",
            kangfuduanlian: "", liliao:"", kangfushijian:""}
    };

    column =  [
        {
            title: '姓名', dataIndex: 'xingming', key: 'xingming', ellipsis: true, width: 100, fixed: 'left',
        },{ title: "发病入院情况", children: [
                {title: "入院基本信息", children:[
                        {
                            title: '分中心', dataIndex: 'fenzhongxin', key: 'fenzhongxin', ellipsis: true
                        },{
                            title: '住院号', dataIndex: 'zhuyuanhao', key: 'zhuyuanhao', ellipsis: true
                        },{
                            title: '入院途径', dataIndex: 'ruyuantujing', key: 'ruyuantujing', ellipsis: true,
                        },{
                            title: '住院天数', dataIndex: 'zhuyuantianshu', key: 'zhuyuantianshu', ellipsis: true,
                        },{
                            title: '入院科别', dataIndex: 'ruyuankebie', key: 'ruyuankebie', ellipsis: true,
                        },{
                            title: '转科科别', dataIndex: 'zhuankekebie', key: 'zhuankekebie', ellipsis: true,
                        },{
                            title: '出院科别', dataIndex: 'chuyuankebie', key: 'chuyuankebie', ellipsis: true,
                        },{
                            title: '主要诊断', dataIndex: 'zhuyaozhenduan', key: 'zhuyaozhenduan', ellipsis: true,
                        },{
                            title: '主要诊断编码', dataIndex: 'zhuyaozhenduanbianma', key: 'zhuyaozhenduanbianma', ellipsis: true,
                        },{
                            title: '其他诊断', dataIndex: 'qitazhenduan', key: 'qitazhenduan', ellipsis: true,
                        },{
                            title: '其他诊断编码', dataIndex: 'qitazhenduanbianma', key: 'qitazhenduanbianma', ellipsis: true,
                        }]
                }, {title: "病史", children:[
                        {
                            title: '发病时间', dataIndex: 'fabingshijian', key: 'fabingshijian', ellipsis: true,
                        },{
                            title: '主要症状', dataIndex: 'zhuyaozhengzhuang', key: 'zhuyaozhengzhuang', ellipsis: true,
                        },{
                            title: '伴随症状', dataIndex: 'bansuizhengzhuang', key: 'bansuizhengzhuang', ellipsis: true,
                        },{
                            title: '既往史', dataIndex: 'jiwangshi', key: 'jiwangshi', ellipsis: true,
                        },{
                            title: '药物过敏', dataIndex: 'yaowuguomin', key: 'yaowuguomin', ellipsis: true,
                        },{
                            title: '过敏药物', dataIndex: 'guominyaowu', key: 'guominyaowu', ellipsis: true,
                        },{
                            title: '吸烟史', dataIndex: 'xiyanshi', key: 'xiyanshi', ellipsis: true,
                        },{
                            title: '饮酒史', dataIndex: 'yinjiushi', key: 'yinjiushi', ellipsis: true,
                        },{
                            title: '个人史', dataIndex: 'gerenshi', key: 'gerenshi', ellipsis: true,
                        },{
                            title: '家族史', dataIndex: 'jiazushi', key: 'jiazushi', ellipsis: true,
                        }]
                }, {title: "体格检查", children:[
                        {
                            title: '血压', dataIndex: 'xueya', key: 'xueya', ellipsis: true,
                        },{
                            title: '意识水平', dataIndex: 'yishishuiping', key: 'yishishuiping', ellipsis: true,
                        },{
                            title: '肢体运动肌力', dataIndex: 'zhitiyundongjili', key: 'zhitiyundongjili', ellipsis: true,
                        },{
                            title: '感觉障碍', dataIndex: 'ganjuezhangai', key: 'ganjuezhangai', ellipsis: true,
                        },{
                            title: '语言表达', dataIndex: 'yuyanbiaoda', key: 'yuyanbiaoda', ellipsis: true,
                        },{
                            title: '神经反射', dataIndex: 'shenjingfanshe', key: 'shenjingfanshe', ellipsis: true,
                        },{
                            title: '病理征', dataIndex: 'binglizheng', key: 'binglizheng', ellipsis: true,
                        },{
                            title: 'NIHSS', dataIndex: 'NIHSS', key: 'NIHSS', ellipsis: true,
                        },{
                            title: 'GLASGOW', dataIndex: 'GLASGOW', key: 'GLASGOW', ellipsis: true,
                        },{
                            title: 'MRANKIN', dataIndex: 'MRANKIN', key: 'MRANKIN', ellipsis: true,
                        },{
                            title: 'MMSE', dataIndex: 'MMSE', key: 'MMSE', ellipsis: true,
                        },{
                            title: 'LOTCA', dataIndex: 'LOTCA', key: 'LOTCA', ellipsis: true,
                        }]
                }, {title: "影像检查", children:[
                        {
                            title: '颅内出血部位', dataIndex: 'chuxuebuwei', key: 'chuxuebuwei', ellipsis: true,
                        },{
                            title: '颅内出血体积', dataIndex: 'chuxuetiji', key: 'chuxuetiji', ellipsis: true,
                        },{
                            title: 'CT值', dataIndex: 'CTzhi', key: 'CTzhi', ellipsis: true,
                        },{
                            title: '心脏彩超', dataIndex: 'xinzangcaichao', key: 'xinzangcaichao', ellipsis: true,
                        },{
                            title: 'LVEF', dataIndex: 'LVEF', key: 'LVEF', ellipsis: true,
                        },{
                            title: '颈动脉彩超', dataIndex: 'jingdongmaicaichao', key: 'jingdongmaicaichao', ellipsis: true,
                        },{
                            title: '胸片', dataIndex: 'xiongpian', key: 'xiongpian', ellipsis: true,
                        }]
                }, {title: "实验室检查", children:[
                        {title: "血常规", children: [
                                // 血常规：
                                {
                                    title: '白细胞', dataIndex: 'xuebaixibao', key: 'xuebaixibao', ellipsis: true,
                                },{
                                    title: '中性细胞数', dataIndex: 'zhongxing', key: 'zhongxing', ellipsis: true,
                                },{
                                    title: '淋巴细胞数', dataIndex: 'linba', key: 'linba', ellipsis: true,
                                },{
                                    title: '单核细胞', dataIndex: 'danhe', key: 'danhe', ellipsis: true,
                                },{
                                    title: '红细胞数', dataIndex: 'xuehongxibao', key: 'xuehongxibao', ellipsis: true,
                                },{
                                    title: '血红蛋白', dataIndex: 'xuehongdanbai', key: 'xuehongdanbai', ellipsis: true,
                                },{
                                    title: '血小板', dataIndex: 'xuexiaoban', key: 'xuexiaoban', ellipsis: true,
                                }]
                        },{ title: "尿常规", children: [
                                // 尿常规：
                                {
                                    title: '白细胞', dataIndex: 'niaobaixibao', key: 'niaobaixibao', ellipsis: true,
                                },{
                                    title: '红细胞', dataIndex: 'niaohongxibao', key: 'niaohongxibao', ellipsis: true,
                                },{
                                    title: '尿蛋白', dataIndex: 'niaodanbai', key: 'niaodanbai', ellipsis: true,
                                },{
                                    title: '脓细胞', dataIndex: 'nongxibao', key: 'nongxibao', ellipsis: true,
                                }]
                        },{ title: "大便常规", children: [
                                // 大便常规：
                                {
                                    title: 'OB', dataIndex: 'OB', key: 'OB', ellipsis: true,
                                }]
                        },{ title: "肝功生化", children: [
                                // 肝功：
                                {
                                    title: '谷丙转氨酶', dataIndex: 'gubing', key: 'gubing', ellipsis: true,
                                },{
                                    title: '谷草转氨酶', dataIndex: 'gucao', key: 'gucao', ellipsis: true,
                                },{
                                    title: '转肽酶', dataIndex: 'zhuantaimei', key: 'zhuantaimei', ellipsis: true,
                                },{
                                    title: '总蛋白', dataIndex: 'zongdanbai', key: 'zongdanbai', ellipsis: true,
                                },{
                                    title: '白蛋白', dataIndex: 'baidanbai', key: 'baidanbai', ellipsis: true,
                                },{
                                    title: '总胆红素', dataIndex: 'zongdanhongsu', key: 'zongdanhongsu', ellipsis: true,
                                },{
                                    title: '直接胆红素', dataIndex: 'zhijiedanhongsu', key: 'zhijiedanhongsu', ellipsis: true,
                                },{
                                    title: '血糖', dataIndex: 'xuetang', key: 'xuetang', ellipsis: true,
                                },{
                                    title: '总胆固醇', dataIndex: 'zongdanguchun', key: 'zongdanguchun', ellipsis: true,
                                },{
                                    title: '甘油三脂', dataIndex: 'ganyousanzhi', key: 'ganyousanzhi', ellipsis: true,
                                },{
                                    title: 'HDL', dataIndex: 'HDL', key: 'HDL', ellipsis: true,
                                },{
                                    title: 'LDL', dataIndex: 'LDL', key: 'LDL', ellipsis: true,
                                },{
                                    title: '糖化血红蛋白', dataIndex: 'tanghuaxuehongdanbai', key: 'tanghuaxuehongdanbai', ellipsis: true,
                                },{
                                    title: 'HCY', dataIndex: 'HCY', key: 'HCY', ellipsis: true,
                                },{
                                    title: '肌钙蛋白T', dataIndex: 'jigaiT', key: 'jigaiT', ellipsis: true,
                                },{
                                    title: '肌钙蛋白I', dataIndex: 'jigaiI', key: 'jigaiI', ellipsis: true,
                                },{
                                    title: 'BNP', dataIndex: 'BNP', key: 'BNP', ellipsis: true,
                                },{
                                    title: '钠', dataIndex: 'na', key: 'na', ellipsis: true,
                                },{
                                    title: '钾', dataIndex: 'jia', key: 'jia', ellipsis: true,
                                },{
                                    title: '氯', dataIndex: 'lv', key: 'lv', ellipsis: true,
                                },{
                                    title: 'CO2结合力', dataIndex: 'CO2', key: 'CO2', ellipsis: true,
                                }]
                        },{ title: "肾功", children: [
                                {
                                    title: '尿素', dataIndex: 'niaosu', key: 'niaosu', ellipsis: true,
                                },{
                                    title: '肌酐', dataIndex: 'jigan', key: 'jigan', ellipsis: true,
                                },{
                                    title: '尿酸', dataIndex: 'niaosuan', key: 'niaosuan', ellipsis: true,
                                }]
                        },{ title: "甲功", children: [
                                {
                                    title: 'T3', dataIndex: 'T3', key: 'T3', ellipsis: true,
                                },{
                                    title: 'T4', dataIndex: 'T4', key: 'T4', ellipsis: true,
                                },{
                                    title: 'TSH', dataIndex: 'TSH', key: 'TSH', ellipsis: true,
                                },{
                                    title: '抗甲状腺过氧化物酶抗体', dataIndex: 'guoyanghuawumei', key: 'guoyanghuawumei', ellipsis: true,
                                },{
                                    title: '抗甲状腺球蛋白抗体', dataIndex: 'qiudanbai', key: 'qiudanbai', ellipsis: true,
                                }]
                        },{ title: "病毒系列", children: [
                                {
                                    title: '乙肝', dataIndex: 'yigan', key: 'yigan', ellipsis: true,
                                },{
                                    title: '乙肝表面抗原', dataIndex: 'biaomiankangyuan', key: 'biaomiankangyuan', ellipsis: true,
                                },{
                                    title: '乙肝表面抗体', dataIndex: 'biaomiankangti', key: 'biaomiankangti', ellipsis: true,
                                },{
                                    title: '乙肝E抗原', dataIndex: 'Ekangyuan', key: 'Ekangyuan', ellipsis: true,
                                },{
                                    title: '乙肝E抗体', dataIndex: 'Ekangti', key: 'Ekangti', ellipsis: true,
                                },{
                                    title: '乙肝核心抗体', dataIndex: 'hexinkangti', key: 'hexinkangti', ellipsis: true,
                                },{
                                    title: '丙肝', dataIndex: 'binggan', key: 'binggan', ellipsis: true,
                                },{
                                    title: '梅毒', dataIndex: 'meidu', key: 'meidu', ellipsis: true,
                                },{
                                    title: 'HIV', dataIndex: 'HIV', key: 'HIV', ellipsis: true,
                                }]
                        },{ title: "炎症指标", children: [
                                {
                                    title: 'PCT', dataIndex: 'PCT', key: 'PCT', ellipsis: true,
                                },{
                                    title: 'CRP', dataIndex: 'CRP', key: 'CRP', ellipsis: true,
                                }]
                        },{ title: "其他", children: [
                                {
                                    title: '脑脊液', dataIndex: 'naojiye', key: 'naojiye', ellipsis: true,
                                },{
                                    title: 'ABETA', dataIndex: 'ABETA', key: 'ABETA', ellipsis: true,
                                },{
                                    title: 'TLR', dataIndex: 'TLR', key: 'TLR', ellipsis: true,
                                },{
                                    title: 'NLR', dataIndex: 'NLR', key: 'NLR', ellipsis: true,
                                }]
                        },
                    ]},
            ]
        },{ title: "治疗情况", children: [
                {
                    title: '手术时间', dataIndex: 'shoushushijian', key: 'shoushushijian', ellipsis: true,
                },{
                    title: '手术方式', dataIndex: 'shoushufangshi', key: 'shoushufangshi', ellipsis: true,
                },{
                    title: '药物治疗', dataIndex: 'yaowuzhiliao', key: 'yaowuzhiliao', ellipsis: true,
                },{
                    title: '并发症', dataIndex: 'bingfazheng', key: 'bingfazheng', ellipsis: true,
                },{
                    title: '颅内感染', dataIndex: 'luneiganran', key: 'luneiganran', ellipsis: true,
                },{
                    title: '肺炎', dataIndex: 'feiyan', key: 'feiyan', ellipsis: true,
                },{
                    title: '泌尿系感染', dataIndex: 'miniaoxiganran', key: 'miniaoxiganran', ellipsis: true,
                },{
                    title: 'NIHSS', dataIndex: 'shuhouNIHSS', key: 'shuhouNIHSS', ellipsis: true,
                },{
                    title: 'GLASGOW', dataIndex: 'shuhouGLASGOW', key: 'shuhouGLASGOW', ellipsis: true,
                },{
                    title: 'ADL', dataIndex: 'shuhouADL', key: 'shuhouADL', ellipsis: true,
                },{
                    title: 'MRANKIN', dataIndex: 'shuhouMRANKIN', key: 'shuhouMRANKIN', ellipsis: true,
                },{
                    title: '血压', dataIndex: 'shuhouxueya', key: 'shuhouxueya', ellipsis: true,
                },
            ]
        },{ title: "出院情况", children: [
                {
                    title: '血压', dataIndex: 'chuyuanxueya', key: 'chuyuanxueya', ellipsis: true,
                },{
                    title: 'NIHSS', dataIndex: 'chuyuanNIHSS', key: 'chuyuanNIHSS', ellipsis: true,
                },{
                    title: 'GLASGOW', dataIndex: 'chuyuanGLASGOW', key: 'chuyuanGLASGOW', ellipsis: true,
                },{
                    title: 'ADL', dataIndex: 'chuyuanADL', key: 'chuyuanADL', ellipsis: true,
                },{
                    title: 'MRANKIN', dataIndex: 'chuyuanMRANKIN', key: 'chuyuanMRANKIN', ellipsis: true,
                },{
                    title: 'MMSE', dataIndex: 'chuyuanMMSE', key: 'chuyuanMMSE', ellipsis: true,
                },{
                    title: 'LOTCA', dataIndex: 'chuyuanLOTCA', key: 'chuyuanLOTCA', ellipsis: true,
                }]
        },{ title: "复诊情况", children: [
                {title: "2周", children:[
                        {
                            title: '血压', dataIndex: 'di2zhouxueya', key: 'di2zhouxueya', ellipsis: true,
                        },{
                            title: '意识水平', dataIndex: 'di2zhouyishishuiping', key: 'di2zhouyishishuiping', ellipsis: true,
                        },{
                            title: '肢体运动肌力', dataIndex: 'di2zhouzhitiyundongjili', key: 'di2zhouzhitiyundongjili', ellipsis: true,
                        },{
                            title: '感觉障碍', dataIndex: 'di2zhouganjuezhangai', key: 'di2zhouganjuezhangai', ellipsis: true,
                        },{
                            title: '语言表达', dataIndex: 'di2zhouyuyanbiaoda', key: 'di2zhouyuyanbiaoda', ellipsis: true,
                        },{
                            title: '神经反射', dataIndex: 'di2zhoushenjingfanshe', key: 'di2zhoushenjingfanshe', ellipsis: true,
                        },{
                            title: '病理征', dataIndex: 'di2zhoubinglizheng', key: 'di2zhoubinglizheng', ellipsis: true,
                        },{
                            title: 'NIHSS', dataIndex: 'di2zhouNIHSS', key: 'di2zhouNIHSS', ellipsis: true,
                        },{
                            title: 'GLASGOW', dataIndex: 'di2zhouGLASGOW', key: 'di2zhouGLASGOW', ellipsis: true,
                        },{
                            title: 'ADL', dataIndex: 'di2zhouADL', key: 'di2zhouADL', ellipsis: true,
                        },{
                            title: 'MRANKIN', dataIndex: 'di2zhouMRANKIN', key: 'di2zhouMRANKIN', ellipsis: true,
                        }]
                },{title: "3月", children:[
                        {
                            title: '血压', dataIndex: 'di3yuexueya', key: 'di3yuexueya', ellipsis: true,
                        },{
                            title: '意识水平', dataIndex: 'di3yueyishishuiping', key: 'di3yueyishishuiping', ellipsis: true,
                        },{
                            title: '肢体运动肌力', dataIndex: 'di3yuezhitiyundongjili', key: 'di3yuezhitiyundongjili', ellipsis: true,
                        },{
                            title: '感觉障碍', dataIndex: 'di3yueganjuezhangai', key: 'di3yueganjuezhangai', ellipsis: true,
                        },{
                            title: '语言表达', dataIndex: 'di3yueyuyanbiaoda', key: 'di3yueyuyanbiaoda', ellipsis: true,
                        },{
                            title: '神经反射', dataIndex: 'di3yueshenjingfanshe', key: 'di3yueshenjingfanshe', ellipsis: true,
                        },{
                            title: '病理征', dataIndex: 'di3yuebinglizheng', key: 'di3yuebinglizheng', ellipsis: true,
                        },{
                            title: 'NIHSS', dataIndex: 'di3yueNIHSS', key: 'di3yueNIHSS', ellipsis: true,
                        },{
                            title: 'GLASGOW', dataIndex: 'di3yueGLASGOW', key: 'di3yueGLASGOW', ellipsis: true,
                        },{
                            title: 'ADL', dataIndex: 'di3yueADL', key: 'di3yueADL', ellipsis: true,
                        },{
                            title: 'MRANKIN', dataIndex: 'di3yueMRANKIN', key: 'di3yueMRANKIN', ellipsis: true,
                        }]
                },{title: "6月", children:[
                        {
                            title: '血压', dataIndex: 'di6yuexueya', key: 'di6yuexueya', ellipsis: true,
                        },{
                            title: '意识水平', dataIndex: 'di6yueyishishuiping', key: 'di6yueyishishuiping', ellipsis: true,
                        },{
                            title: '肢体运动肌力', dataIndex: 'di6yuezhitiyundongjili', key: 'di6yuezhitiyundongjili', ellipsis: true,
                        },{
                            title: '感觉障碍', dataIndex: 'di6yueganjuezhangai', key: 'di6yueganjuezhangai', ellipsis: true,
                        },{
                            title: '语言表达', dataIndex: 'di6yueyuyanbiaoda', key: 'di6yueyuyanbiaoda', ellipsis: true,
                        },{
                            title: '神经反射', dataIndex: 'di6yueshenjingfanshe', key: 'di6yueshenjingfanshe', ellipsis: true,
                        },{
                            title: '病理征', dataIndex: 'di6yuebinglizheng', key: 'di6yuebinglizheng', ellipsis: true,
                        },{
                            title: 'NIHSS', dataIndex: 'di6yueNIHSS', key: 'di6yueNIHSS', ellipsis: true,
                        },{
                            title: 'GLASGOW', dataIndex: 'di6yueGLASGOW', key: 'di6yueGLASGOW', ellipsis: true,
                        },{
                            title: 'ADL', dataIndex: 'di6yueADL', key: 'di6yueADL', ellipsis: true,
                        },{
                            title: 'MRANKIN', dataIndex: 'di6yueMRANKIN', key: 'di6yueMRANKIN', ellipsis: true,
                        }]
                },{title: "1年", children:[
                        {
                            title: '血压', dataIndex: 'di1nianxueya', key: 'di1nianxueya', ellipsis: true,
                        },{
                            title: '意识水平', dataIndex: 'di1nianyishishuiping', key: 'di1nianyishishuiping', ellipsis: true,
                        },{
                            title: '肢体运动肌力', dataIndex: 'di1nianzhitiyundongjili', key: 'di1nianzhitiyundongjili', ellipsis: true,
                        },{
                            title: '感觉障碍', dataIndex: 'di1nianganjuezhangai', key: 'di1nianganjuezhangai', ellipsis: true,
                        },{
                            title: '语言表达', dataIndex: 'di1nianyuyanbiaoda', key: 'di1nianyuyanbiaoda', ellipsis: true,
                        },{
                            title: '神经反射', dataIndex: 'di1nianshenjingfanshe', key: 'di1nianshenjingfanshe', ellipsis: true,
                        },{
                            title: '病理征', dataIndex: 'di1nianbinglizheng', key: 'di1nianbinglizheng', ellipsis: true,
                        },{
                            title: 'NIHSS', dataIndex: 'di1nianNIHSS', key: 'di1nianNIHSS', ellipsis: true,
                        },{
                            title: 'GLASGOW', dataIndex: 'di1nianGLASGOW', key: 'di1nianGLASGOW', ellipsis: true,
                        },{
                            title: 'ADL', dataIndex: 'di1nianADL', key: 'di1nianADL', ellipsis: true,
                        },{
                            title: 'MRANKIN', dataIndex: 'di1nianMRANKIN', key: 'di1nianMRANKIN', ellipsis: true,
                        }]
                },{title: "3年", children:[
                        {
                            title: '血压', dataIndex: 'di3nianxueya', key: 'di3nianxueya', ellipsis: true,
                        },{
                            title: '意识水平', dataIndex: 'di3nianyishishuiping', key: 'di3nianyishishuiping', ellipsis: true,
                        },{
                            title: '肢体运动肌力', dataIndex: 'di3nianzhitiyundongjili', key: 'di3nianzhitiyundongjili', ellipsis: true,
                        },{
                            title: '感觉障碍', dataIndex: 'di3nianganjuezhangai', key: 'di3nianganjuezhangai', ellipsis: true,
                        },{
                            title: '语言表达', dataIndex: 'di3nianyuyanbiaoda', key: 'di3nianyuyanbiaoda', ellipsis: true,
                        },{
                            title: '神经反射', dataIndex: 'di3nianshenjingfanshe', key: 'di3nianshenjingfanshe', ellipsis: true,
                        },{
                            title: '病理征', dataIndex: 'di3nianbinglizheng', key: 'di3nianbinglizheng', ellipsis: true,
                        },{
                            title: 'NIHSS', dataIndex: 'di3nianNIHSS', key: 'di3nianNIHSS', ellipsis: true,
                        },{
                            title: 'GLASGOW', dataIndex: 'di3nianGLASGOW', key: 'di3nianGLASGOW', ellipsis: true,
                        },{
                            title: 'ADL', dataIndex: 'di3nianADL', key: 'di3nianADL', ellipsis: true,
                        },{
                            title: 'MRANKIN', dataIndex: 'di3nianMRANKIN', key: 'di3nianMRANKIN', ellipsis: true,
                        }]
                },{title: "5年", children:[
                        {
                            title: '血压', dataIndex: 'di5nianxueya', key: 'di5nianxueya', ellipsis: true,
                        },{
                            title: '意识水平', dataIndex: 'di5nianyishishuiping', key: 'di5nianyishishuiping', ellipsis: true,
                        },{
                            title: '肢体运动肌力', dataIndex: 'di5nianzhitiyundongjili', key: 'di5nianzhitiyundongjili', ellipsis: true,
                        },{
                            title: '感觉障碍', dataIndex: 'di5nianganjuezhangai', key: 'di5nianganjuezhangai', ellipsis: true,
                        },{
                            title: '语言表达', dataIndex: 'di5nianyuyanbiaoda', key: 'di5nianyuyanbiaoda', ellipsis: true,
                        },{
                            title: '神经反射', dataIndex: 'di5nianshenjingfanshe', key: 'di5nianshenjingfanshe', ellipsis: true,
                        },{
                            title: '病理征', dataIndex: 'di5nianbinglizheng', key: 'di5nianbinglizheng', ellipsis: true,
                        },{
                            title: 'NIHSS', dataIndex: 'di5nianNIHSS', key: 'di5nianNIHSS', ellipsis: true,
                        },{
                            title: 'GLASGOW', dataIndex: 'di5nianGLASGOW', key: 'di5nianGLASGOW', ellipsis: true,
                        },{
                            title: 'ADL', dataIndex: 'di5nianADL', key: 'di5nianADL', ellipsis: true,
                        },{
                            title: 'MRANKIN', dataIndex: 'di5nianMRANKIN', key: 'di5nianMRANKIN', ellipsis: true,
                        }]
                },{title: "10年", children:[
                        {
                            title: '血压', dataIndex: 'di10nianxueya', key: 'di10nianxueya', ellipsis: true,
                        },{
                            title: '意识水平', dataIndex: 'di10nianyishishuiping', key: 'di10nianyishishuiping', ellipsis: true,
                        },{
                            title: '肢体运动肌力', dataIndex: 'di10nianzhitiyundongjili', key: 'di10nianzhitiyundongjili', ellipsis: true,
                        },{
                            title: '感觉障碍', dataIndex: 'di10nianganjuezhangai', key: 'di10nianganjuezhangai', ellipsis: true,
                        },{
                            title: '语言表达', dataIndex: 'di10nianyuyanbiaoda', key: 'di10nianyuyanbiaoda', ellipsis: true,
                        },{
                            title: '神经反射', dataIndex: 'di10nianshenjingfanshe', key: 'di10nianshenjingfanshe', ellipsis: true,
                        },{
                            title: '病理征', dataIndex: 'di10nianbinglizheng', key: 'di10nianbinglizheng', ellipsis: true,
                        },{
                            title: 'NIHSS', dataIndex: 'di10nianNIHSS', key: 'di10nianNIHSS', ellipsis: true,
                        },{
                            title: 'GLASGOW', dataIndex: 'di10nianGLASGOW', key: 'di10nianGLASGOW', ellipsis: true,
                        },{
                            title: 'ADL', dataIndex: 'di10nianADL', key: 'di10nianADL', ellipsis: true,
                        },{
                            title: 'MRANKIN', dataIndex: 'di10nianMRANKIN', key: 'di10nianMRANKIN', ellipsis: true,
                        }]
                }]
        },{ title: "康复情况", children: [
                {
                    title: '康复锻炼', dataIndex: 'kangfuduanlian', key: 'kangfuduanlian', ellipsis: true,
                },{
                    title: '理疗', dataIndex: 'liliao', key: 'liliao', ellipsis: true,
                },{
                    title: '康复时间', dataIndex: 'kangfushijian', key: 'kangfushijian', ellipsis: true,
                }]
        },{
            title: '操作', key: 'action', fixed: "right",width: 100,
            render: (text, record) => (
                <span>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a onClick={()=>{this.operation(record, "edit")}}>修改</a>
                </span>
            ),
        }
    ];

    // 处理操作请求，例如：编辑，删除，查看
    operation(record, action){
        switch (action) {
            case "edit":
                this.setState({temp: record, visible: true, disable: true});
                break;
            default:
                break;
        }
    }

    async getAllInfo(data){
        let {store} = this.props;
        let response = await getAllInfo(data);
        if(response != null && response.code !== null && response.code === 200){
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
        if(response != null && response.code !==null && response.code ===200){
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
                        <Col xs={{span: 6, offset:18}}>
                            <Search placeholder="input search text" style={{}} onSearch={value => this.search(value)} enterButton onChange={event => this.search(event.target.value)}/>
                        </Col>
                    </Row>
                    <Modal title="添加/修改病人信息"
                           width={820}
                           centered
                           visible={this.state.visible}
                           onOk={() => {this.setState({visible: false}); this.editAllInfo()}}
                           onCancel={() => {this.setState({visible: false, temp: {}})}}>
                        <Form layout="inline">
                            {Object.keys(formField).map((item,index) =>
                                    <Form.Item label={item} hasFeedback key={index}>
                                        <Input allowClear placeholder={item} value={this.state.temp[formField[item]]} onChange={this.editChange.bind(this, ""+formField[item])} />
                                    </Form.Item>
                                )
                            }
                        </Form>
                    </Modal>
                </div>
                <div className="table-container" style={{ padding: "10px 0px 0px 0px", height: "100%" }}>
                    <Table
                        rowKey={record => record.zhuyuanhao}
                        size="small"
                        bordered
                        style={{ height: "100%" }}
                        columns={this.column}
                        dataSource={store.record}
                        scroll={{ x: 18000 }}
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

import ajax from './ajax';

const BASE = "http://localhost:3000";

export function login(data) {
    return ajax.post(
        BASE + "/auth/login",
        data
    ).then((response) => {
        return response.data;
    }).catch((error)=>{
        console.log("登录失败")
    })
}

export function key(data) {
    return ajax.get(
        BASE + "/auth/key",
        data
    ).then((response) => {
        return response.data;
    }).catch((error)=>{
        console.log("获取key失败: " + error)
    })
}

// 基础信息处理
export function getBasicInfo(data) {
    console.log(data);
    return ajax.get(
        BASE + "/pre/selectjiben",
        {params: data}
    ).then((response) => {
        return response.data;
    }).catch((error)=>{
        console.log("获取病人基础数据失败: " + error)
    })
}
// 基础信息添加
export function addBasicInfo(data) {
    return ajax.post(
        BASE + "/pre/insert",
        data
    ).then((response) => {
        return response.data;
    }).catch((error)=>{
        console.log("添加病人基础数据失败: " + error)
    })
}
// 基础信息修改
export function editBasicInfo(data) {
    return ajax.post(
        BASE + "/pre/updatejiben",
        data
    ).then((response) => {
        return response.data;
    }).catch((error)=>{
        console.log("编辑病人基础数据失败: " + error)
    })
}


export function getAllInfo(data) {
    return ajax.get(
        BASE + "/pre/selectbyno",
        {params: data}
    ).then((response) => {
        return response.data;
    }).catch((error)=>{
        console.log("获取详细数据失败: " + error)
    })
}


export function editAllInfo(data) {
    return ajax.post(
        BASE + "/pre/updateall",
        data
    ).then((response) => {
        return response.data;
    }).catch((error)=>{
        console.log("编辑详细数据失败: " + error)
    })
}

export function CTview(data) {
    return ajax.get(
        BASE + "/view",
        {params: data}
    ).then((response) => {
        return response.data;
    }).catch((error)=>{
        console.log("获取CT数据失败: " + error)
    })
}

export function download(data) {
    return ajax({
        method: 'POST',
        url: BASE + "/download",
        data: data,
        responseType: 'blob'}
    ).then((response) => {
        return response.data;
    }).catch((error)=>{
        console.log("获取下载数据失败: " + error)
    })
}

export function upload(formData, data) {

    return ajax({
        method: 'POST',
        url: BASE + "/upload",
        data: formData,
        params: data,
        headers: {"Content-Type":false, "processData": false}}
    ).then((response) => {
        return response.data;
    }).catch((error)=>{
        console.log("获取下载数据失败: " + error)
    })
}


export function export2Excel(data) {
    return ajax({
        method: 'POST',
        url: BASE + "/pre/exportexcel",
        data: data,
        responseType: 'blob'}
    ).then((response) => {
        return response.data;
    }).catch((error)=>{
        console.log("获取excel数据失败: " + error)
    })
}



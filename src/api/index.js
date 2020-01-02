import ajax from './ajax'

const BASE = "http://localhost:3000"

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

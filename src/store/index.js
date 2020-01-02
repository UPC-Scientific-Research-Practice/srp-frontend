import {observable, action} from "mobx";


class Store {
    @observable token = "";
    @action addToken(token){
        this.token = token;
        localStorage.setItem("token", token);
    }

    @observable user = {
        username: "zhoutao",
        password: "zhoutao"
    };
    @action addUser(user){
        this.user = user;
    }

    @observable publicKey = "";
    @action addPublicKey(key){
        this.publicKey = key;
    }

    // 操纵本地存储
    @action setTokenToStorage () {
        localStorage.setItem("srp_token", this.token);
        return this.token;
    }
    @action getTokenToStorage(){
        const value = localStorage.getItem("srp_token");
        if(value){
            this.token = value;
        }else{
            this.token = "";
        }
    }
    @action removeTokenAndFromStorage(){
        localStorage.removeItem("srp_token");
        this.token = "";
    }

}

const store = new Store();

export default store;

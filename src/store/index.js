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

    // 病人数据
    @observable patient = [];
    @action addPatient(patient){
        this.patient = patient;
    }

    @observable patientBasic = [];
    @action addPatientBasic(patientBasic){
        this.patientBasic = patientBasic;
    }
    // ct数据
    @observable ct = [];
    @action addData(ct){
        this.ct = ct;
    }
    // 病历数据
    @observable record = [];
    @action addRecord(record){
        this.record = record;
    }

    // check
    @observable check = [];
    @action add(check){
        this.check.push(check);
    }
    @action remove(check){
        this.check.forEach((item, index) => {
            if(item === check){
                const temp = this.check.slice();
                temp.splice(index, 1);
                this.check = temp;
            }
        })
    }
    @action addOrRemove(check){
        let flag = false;
        this.check.forEach((item, index) => {
            if(item.id === check.id){
                flag = true;
                const temp = this.check.slice();
                temp.splice(index, 1);
                this.check = temp;
            }
        });
        if(flag === false){
            this.check.push(check);
        }
    }
}

const store = new Store();

export default store;

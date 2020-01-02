import {JSEncrypt} from 'jsencrypt'

// rsa加密
export function rsaEncrypt(props, publicKey){
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey('-----BEGIN PUBLIC KEY-----' + publicKey + '-----END PUBLIC KEY-----');
    const encrypted = encrypt.encrypt(props);
    return encrypted;
}

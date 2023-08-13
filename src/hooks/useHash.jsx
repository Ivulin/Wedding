var CryptoJS = require("crypto-js");

export function getMD5(value){
    return CryptoJS.MD5(value);
};

export function getSHA256(value){
    return CryptoJS.SHA256(value);
};
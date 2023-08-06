var CryptoJS = require("crypto-js");

export function useMD5(value){
    return CryptoJS.MD5(value);
};

export function useSHA256(value){
    return CryptoJS.SHA256(value);
};
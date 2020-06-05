import axios from 'axios'
import { stringify } from 'querystring';

export function getAllMainUnits(){
    return axios({
        method:'get', headers:{"content-type":"application/json"},
        url:"http://localhost:8088/unit/type"
    })
}

export function getAllSubUnits(quantityType){
    return axios({
        method:'get', headers:{"content-type":"application/json"},
        url:"http://localhost:8088/unit/subtype?quantityType="+quantityType
    })
}
    export function getConvertedValue(dto){
        console.log("service dto >>",dto)
        return axios({
            method:'post',
            url:"http://localhost:8088/conversions",
            data:dto
           
        })
    }
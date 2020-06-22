import axios from 'axios'
/* 
  ajax请求模块
  返回值：promise对象（异步返回的数据是 response.data 而不是response）
*/
export default function ajax(url, data = {}, type = 'GET') {
    return new Promise(function (resolve, reject) {
        let promise
        if(type==='GET'){
            let dataStr=''
            Object.keys(data).forEach(key=>{
                dataStr+=key+=data[key]+"&"
            })
            if(dataStr !==''){
                url+=dataStr.substring(0,dataStr.lastIndexOf('&'))
            }
            promise=axios.get(url)
        }else{
            promise=axios.post(url,data)
        }
        promise.then(response=>{
            resolve(response.data)
        }).catch(error=>{
            reject(error)
        })
    })

}
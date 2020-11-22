import {API} from '../utils/config';
import Http from '../utils/http'



export const getCourseDatas= ()=>{
    return new Promise((resolve,reject)=>{
        Http({
            url: API.getCourseDatas,
            success (data) {
                resolve(data)
            },
            error (error){
                reject(error)
            }
        })
    })
}
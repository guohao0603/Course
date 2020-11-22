import {API} from '../utils/config';
import Http from '../utils/http'

export const getCourseFields = ()=> {
    return new Promise((resolve,reject)=>{
        Http({
            url: API.getCourseFields,
            success (data) {
                resolve(data)
            },
            error (error){
                reject(error)
            }
        })
    })
}

export const getCourses = (field)=> {
    return new Promise((resolve,reject)=>{
        Http({
            url: API.getCourses + field,
            success (data) {
                resolve(data)
            },
            error (error){
                reject(error)
            }
        })
    })
}
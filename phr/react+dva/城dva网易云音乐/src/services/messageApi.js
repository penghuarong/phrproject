import axios from 'axios';
const url='http://123.206.55.50:14000';
export function getMymessageApi (id) {
   return axios.get(`${url}/user/detail?uid=${id}`).then(res=>{
        return res.data.profile;
    })
}
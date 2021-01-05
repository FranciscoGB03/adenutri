import API from './Axios';

export const getRoles=()=>{
    return API.get(`rol`)
    .then((res)=>{        
        return res.data;
    }).catch((error)=>{
        console.log(error);
    })
}

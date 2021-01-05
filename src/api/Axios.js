import axios from 'axios';

export default axios.create({
    baseURL:`${process.env.REACT_APP_URL_API}/`
    //baseURL:"http://localhost:83/api/"
    //headers:{ common:{}}
})
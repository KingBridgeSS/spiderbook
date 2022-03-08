import axios from 'axios';
import config from '../config/ServiceConfig.js'
const HOST=config.host;
const PORT=config.port;
let _baseUrl=`http://${HOST}:${PORT}/api`
export default axios.create({
    baseURL:_baseUrl,
    headers:{
        "Content-type": "application/json"
    }
})
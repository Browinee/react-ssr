import axios from 'axios';
import config from '../../config';
const createInstance = (req) => axios.create({
  baseURL: config.baseUrl,
  param: {
    secret: config.secret
  },
  header: {
    cookie: req.get("cookie")|| "",
  }
})

export default createInstance;

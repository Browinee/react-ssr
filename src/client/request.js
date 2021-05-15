import axios from 'axios';
import config from "../../config";
export default axios.create({
  baseURL: '/',
  params: {
    secret: config.secret
  }
})

import axios from 'axios'
import {mainUrl, ssoUrl} from '../config/env'
import * as mobile from './../config/mUtils'

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'


let searchParams = (prop) => {
  let param = new URLSearchParams();
  for (let key in prop) {
    param.append(key, prop[key])
  }
  return param
}


/**
 * 检验所列表
 */
let inspectionOfficeList = () => axios.get('/back/inspectionOffice/inspectionOfficeList');



export {
  inspectionOfficeList,
}

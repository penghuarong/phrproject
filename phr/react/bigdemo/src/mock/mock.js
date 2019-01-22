/*
 * @Author: PengHuaRong 
 * @Date: 2018-10-13 09:27:07 
 * @Last Modified by: PengHuaRong
 * @Last Modified time: 2018-10-14 20:09:59
 */
import axios from "axios";
import Adapter from "axios-mock-adapter";
import data from "./data/data.js";
let mock = new Adapter(axios);
mock.onGet("/amazon").reply(200, data)
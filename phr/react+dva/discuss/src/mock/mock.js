import axios from "axios";
import Adapter from "axios-mock-adapter";
import data from "./data/data.js";
import listdata from "./data/listdata";
import movieData from "./data/moviedata";
import userList from "./data/userinfo";
let mock = new Adapter(axios);
mock.onGet("/swiperData").reply(200, data)
mock.onGet("/ListData").reply(200, listdata)
mock.onGet("/movie").reply(200, movieData)
mock.onGet("/ListDataDetail").reply(200, listdata)
mock.onGet("/user").reply(200, userList)
    // mock.onGet("/ListDataDetail").reply((config) => {
    //     const result = listdata.filter((item) => {
    //         return item.id === config.id
    //     })
    //     return [200, result]
    // })
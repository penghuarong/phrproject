import axios from "axios";
import jsonp from "../common/js/jsonp"
export function getCarousel() {
    const url = "http://localhost:8888/CarouselList";
    return axios.get(url);
}
export function getSongs() {
    const url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg";
    const data = {
        tpl: 3,
        page: "detail",
        date: "2018-09-11",
        topid: 4,
        type: "top",
        song_begin: 0,
        song_num: 30,
        g_tk: 5381,
        loginUin: 0,
        hostUin: 0,
        format: "jsonp",
        inCharset: "utf8",
        outCharset: "utf-8",
        notice: 0,
        platform: "yqq",
        needNewCode: 0
    }
    const opt = {
        param: "jsonpCallback",
        prefix: "__jp"
    }
    return jsonp(url, data, opt);
}
export function getdetail() {
    const url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg";
    const data = {
        albummid: "000xz4sw2fPuF7",
        g_tk: 5381,
        loginUin: 0,
        hostUin: 0,
        format: "jsonp",
        inCharset: "utf8",
        outCharset: "utf-8",
        notice: 0,
        platform: "yqq",
        needNewCode: 0
    }
    const opt = {
        param: "jsonpCallback",
        prefix: "__jp"
    }
    return jsonp(url, data, opt)
}
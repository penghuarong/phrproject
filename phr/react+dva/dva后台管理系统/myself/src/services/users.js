import request from '../utils/request';
import fetch from "../utils/fetch";
export const getUsersList = ({ page = 1, pagesize = 10, categoryId = null, searchname = "" }) => request(`/api/admin/product/list?page=${page}&page_size=${pagesize}&searchname=${searchname}`)
    // ?page=${page}&page_size=${pagesize}&categoryId=72&searchname=${searchname}
    // export const getUsersList = (page = 1) => request(`/api/admin/product/list?page=${page}&page_size=10&categoryId=72&searchname=牛`)
    // export const getCategory = () => request(`/api/admin/category/list`)
    // export const getDetail = (id) => request(`/api/admin/product/detail?id=${id}`)
    // export const getAdd = () => request(`/api/admin/product/add`)
    // export const getDetail = (id) => request(`/api/admin/product/detail?id=${id}`)


export const getRemove = (id) => fetch.post(`/api/admin/product/remove`, { id })


export const getAddList = ({
    name,
    img,
    imgList,
    origPrice,
    count,
    details,
    attributes,
    categoryId,
    price
}) => fetch.post(`/api/admin/product/add`, {
    name,
    img,
    imgList,
    origPrice,
    count,
    details,
    attributes,
    categoryId,
    price
});
// export const getFile = (file) => fetch.post("/api/admin/upload", { file })
export const getUsermsg = ({
    phone,
    password
}) => fetch.post("/api/admin/login", {
    phone,
    password
})
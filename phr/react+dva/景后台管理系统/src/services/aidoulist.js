import request from '../utils/request';
const params = (data) => {
  let str = ''
  for (let key in data) {
    str += key + '=' + data[key] + '&'
  }
  return str.substr(0, str.length - 1)
}
export function tradeList(options) {
  return request('/api/admin/product/list?' + params(options));
}
export function getDetail (id) {
  return request('/api/admin/product/detail?id='+id)
}
export function removeItem (id) {
  return request('/api/admin/product/remove', {
    method: 'post',
    headers : {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body : JSON.stringify({
      id:`${id}`
    })
  })
}

export function getFilter () {
  return request('/api/admin/category/list')
}

export function addProduct (data) {
  return request('/api/admin/product/add', {
    method: 'post',
    headers : {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body : JSON.stringify({
      ...data
    })
  })
}

export const modifyData = (data) => {
  return fetch('/api/admin/product/updata', {
    method: 'post',
    headers : {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body : JSON.stringify({
      ...data
    })
  })
}

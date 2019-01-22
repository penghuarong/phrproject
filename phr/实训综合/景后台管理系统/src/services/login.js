import request from '../utils/request'
export const login = (phone, password) => {
  return request('/api/admin/login', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      password,
      phone
    })
  })
}
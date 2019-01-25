import request from '../utils/request'
export function fetch (page=1) {
  return request('/ser/users', {
    _page: page,
    limit: 10
  })
}
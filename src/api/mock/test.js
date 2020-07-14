import http from '../../plugins/http'

export const testMock = (options) => {
  let result = http.post('/api/ratings/list')
  return result
}

export const orderMock = (options) => {
  let result = http.get('/api/orders/orderList')
  return result
}

export const detailedMock = (options) => {
  let result = http.get('/api/orders/detailedData')
  return result
}

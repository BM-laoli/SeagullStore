import { Nesthttp } from '../../plugins/http'

// 获取所有的通用优惠券
export const getCouponListApi = params => {
  return Nesthttp({
    method: 'get',
    url: '/coupon/getCouponList',
    params
  })
}

// 添加优惠券
export const addCouponApi = data => {
  return Nesthttp({
    method: 'post',
    url: '/coupon/CreateCoupon',
    data
  })
}

// 更新优惠券
export const updateCouponApi = (id, data) => {
  return Nesthttp({
    method: 'put',
    url: '/coupon/CouponEdit',
    params: {
      id
    },
    data
  })
}

// 删除优惠券
export const deleteCouponApi = (id, data) => {
  return Nesthttp({
  })
}

// 查询优惠券
export const getQueryCouponApi = params => {
  return Nesthttp({
    method: 'get',
    url: '/coupon/getCouponQuery',
    params
  })
}
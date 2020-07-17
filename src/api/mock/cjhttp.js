import { Nesthttp } from '../../plugins/http'
console.log('Nesthttp', Nesthttp);
// 获取所有店铺列表
export const getShopList = (data) => {
  console.log('shoplist');
  return Nesthttp.get('/shopmanage/shoplist', {
    params: data
  })
}
// 根据商铺id查询商铺详情
export const getShopDetail = (id) => {
  return Nesthttp.get('/shopmanage/shoplist/queryinfobyid', {
    params: {
      id
    }
  })
}
// 根据商铺id查询该商铺经营分析
export const getAnalysis = id => {
  return Nesthttp.get('/shopmanage/shoplist/queryjinyin', {
    params: {
      id
    }
  })
}
// 根据商铺id查询该商铺的商品列表
export const getProductById = data => {
  return Nesthttp.get('/shopmanage/shoplist/queryproduct', {
    params: data
  })
}
// 获取所有商铺的商品列表
export const getProductList = (data) => {
  // return Nesthttp.get('/rest/products/byid', {
  //   params: data
  // })
  console.log('2321', data);
  return Nesthttp.get('/shopmanage/shoplist/getallproduct', {
    params: data
  })
}

// 获取所有商品类别
export const getProductType = () => {
  return Nesthttp.get('/rest/product/type')
}

// 根据商品信息查询商品
export const getProductByName = (form) => {
  return Nesthttp.get('/rest/product/byname', {
    params: form
  })
}
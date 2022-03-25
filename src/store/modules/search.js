/* 
管理搜索模块的数据
*/
import { reqSearch } from "@/api";

const state = {
  productList: {}, // 搜索出的商品列表相关数据的对象
};
const mutations = {
  /* 
  接收保存商品列表相关数据对象
  */
  RECEIVE_PRODUCT_LIST(state, productList) {
    state.productList = productList;
  },
};
const actions = {
  /* 
  根据指定的搜索条件, 异步获取商品列表的action
  */
  async getProductList({ commit }, searchParams) {
    searchParams = { ...searchParams };
    Object.keys(searchParams).forEach((key) => {
      if (
        searchParams[key] === "" ||
        (Array.isArray(searchParams[key]) && searchParams === 0)
      ) {
        delete searchParams[key];
      }
    });
    // 1. ajax请求, 获取数据
    const result = await reqSearch(searchParams);
    // 2. 如果成功, 提交给mutation
    if (result.code === 200) {
      //const productList = result.data;
      commit("RECEIVE_PRODUCT_LIST", result.data);
    }
  },
};
const getters = {
  goodsList(state) {
    return state.productList.goodsList || [];
  },

  trademarkList(state) {
    return state.productList.trademarkList || [];
  },

  attrsList(state) {
    return state.productList.attrsList || [];
  },
  total(state) {
    return state.productList.total || 0;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};

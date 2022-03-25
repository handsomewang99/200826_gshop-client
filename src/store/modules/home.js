/* 
管理首页模块相关数据的vuex子模块
*/
// import {
//   reqCategoryList,
//   reqFloors,
//   reqBanners
// } from '@/api'
import {
  reqCategoryList,
  reqBannerList,
  reqFloors,
  reqRecommends,
} from "@/api";
const state = {
  categoryList: [], // 3级分类列表
  bannerList: [], // 广告位轮播数据的数组
  floors: [], // 所有楼层数据的数组
  recommends: [],
};

const mutations = {
  /*
    接收保存分类列表
    */
  RECEIVE_CATEGORY_LIST(state, categoryList) {
    // state就是当前模块管理的state对象
    state.categoryList = categoryList.splice(0, 15);
  },
  /*
    接收广告轮播列表
    */
  RECEIVE_BANNER_LIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  //   /*
  //   接收楼层列表
  //   */
  RECEIVE_FLOORS(state, floors) {
    state.floors = floors;
  },

  RECEIVE_RECOMMENDS(state, recommends) {
    state.recommends = recommends;
  },
};

const actions = {
  /*
    获取3级分类列表的异步action
    */
  async getCategoryList({ commit }) {
    // 1. 发送异步ajax请求
    const result = await reqCategoryList();
    // 2. 请求成功后, 读取数据,
    if (result.code === 200) {
      const categoryList = result.data;
      // 3. commit给mutation来接收保存数据
      commit("RECEIVE_CATEGORY_LIST", categoryList);
    }
  },
  //异步获取广告位轮播数据
  async getBannerList({ commit }) {
    console.log("getBannerList()");
    const result = await reqBannerList();
    if (result.code === 200) {
      const bannerList = result.data;
      commit("RECEIVE_BANNER_LIST", bannerList);
    }
  }, //异步获取所有楼层数据
  async getFloors({ commit }) {
    console.log("getFloors()");
    const result = await reqFloors();
    if (result.code === 200) {
      const floors = result.data;
      commit("RECEIVE_FLOORS", floors);
    }
  },

  async getRecommends({ commit }) {
    console.log("getRecommends()");
    const result = await reqRecommends();
    if (result.code === 200) {
      const recommends = result.data;
      commit("RECEIVE_RECOMMENDS", recommends);
    }
  },
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};

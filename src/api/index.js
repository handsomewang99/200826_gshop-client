/* 
包含所有接口请求函数的模块
*/
import { method } from "lodash";
import ajax from "./ajax";
import mockAjax from "./mockAjax";

//获取商品的三级分类列表
export function reqCategoryList() {
  return ajax({
    url: "/product/getBaseCategoryList",
  });
}
//export const reqBannerList = () => ajax("/cms/banner");

export const reqBannerList = () => mockAjax("/banners");

export const reqRecommends = () => mockAjax("/recommends");
export const reqFloors = () => mockAjax("/floors");

export const reqSearch = (searchParams) => ajax.post("/list", searchParams);

export const reqDetailInfo = (skuId) => {
  return ajax({
    url: `/item/${skuId}`,
    method: "get",
  });
};

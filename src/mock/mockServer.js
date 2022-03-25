/* 
利用mockjs来mock数据接口
*/
import Mock from "mockjs";
import recommends from "./recommends.json";
import floors from "./floors.json";
import banners from "./banners.json";

// 提供广告位轮播数据的接口
Mock.mock("/mock/recommends", {
  code: 200,
  data: recommends,
});

// 提供所有楼层数据的接口
Mock.mock("/mock/floors", {
  code: 200,
  data: floors,
});

Mock.mock("/mock/banners", {
  code: 200,
  data: banners,
});
console.log("MockServer");

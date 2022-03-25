import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Detail from "@/pages/detail";

export default [
  {
    path: "/detail/:skuId",
    component: Detail,
  },
  {
    path: "/",
    component: Home,
  },
  {
    name: "search",
    path: "/search/:keyword?",
    component: Search,
    props: (route) => ({
      keyword3: route.params.keyword,
      keyword4: route.params.keyword2,
    }),
  },
  {
    path: "/register",
    component: Register,
    meta: { isHideFooter: true },
  },
  {
    path: "/login",
    component: Login,
    meta: { isHideFooter: true },
  },
];

<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
//import { getCategoryList } from "./api";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    // reqCategoryList().then((result) => {
    //   console.log("result", result);
    // });
    this.$store.dispatch("getCategoryList");
    this.$store.dispatch("getBannerList");
  },
};
</script>

<style></style>

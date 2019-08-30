<template>
  <div class="main-container" style="margin:20px;">
    <router-link to="/vue/signin">登录</router-link>
    <router-link to="/vue">vue首页</router-link>
    <a href="javascript:;" @click="navigateToUrl('/')">首页</a>
    <div
      style="width:100%;height:400px;background:#f7f7f7;padding:10px;box-sizing:border-box;"
    >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { navigateToUrl } from "single-spa";

export default {
  data() {
    return {
      navigateToUrl
    };
  },
  mounted() {
    console.log(this.$route);
  }
};
</script>
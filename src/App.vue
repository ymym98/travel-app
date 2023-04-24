<template>
  <div id="app">
    <HeaderView></HeaderView>
    <router-view />
  </div>
</template>

<script>
import HeaderView from "./components/HeaderView.vue";

export default {
  components: {
    HeaderView,
  },
};
</script>

<style></style>

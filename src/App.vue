<template>
  <div id="app">
    <HeaderView></HeaderView>
    <router-view />
  </div>
</template>

<script>
import HeaderView from "./components/HeaderView.vue";
import { setPersistence, browserSessionPersistence } from "firebase/auth";
import { auth } from "./firebase";

export default {
  components: {
    HeaderView,
  },
  created() {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        this.$store.dispatch("onAuth");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode:", errorCode);
        console.log("errorMessage:", errorMessage);
      });
  },
};
</script>

<style></style>

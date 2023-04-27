<template>
  <div>
    <header class="py-6">
      <!-- ロゴ -->
      <div
        class="container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full"
      >
        <div class="text-lg font-bold">Travel.com</div>

        <!-- 会員登録等 -->
        <div class="space-x-12 hidden md:flex items-center">
          <!-- ログアウト状態なら「ログイン」ボタンを表示 -->
          <router-link to="/login" v-if="!this.$store.getters.isLoggedIn">
            <i class="hover:text-selected-text transition-all duration-300"></i
            >ログイン
          </router-link>
          <!-- ログイン状態なら「ログアウト」ボタンを表示 -->
          <router-link
            to="/login"
            @click.native="logOut"
            v-if="this.$store.getters.isLoggedIn"
          >
            <i class="hover:text-selected-text transition-all duration-300"></i
            >ログアウト
          </router-link>

          <!-- <a href="#contact">
            <button
              class="px-6 py-2 bg-theme font-bold rounded-lg hover:bg-purple-600 transition-all duration-300"
            >
              お問い合わせ
            </button>
          </a> -->

          <!-- ログイン状態なら名前を表示する -->
          <div v-if="this.$store.getters.isLoggedIn">
            {{ this.$store.getters.user.displayName }}さん
          </div>

          <!-- ユーザープロフィール -->
          <router-link to="/userInfo">
            <font-awesome-icon :icon="['fas', 'user']" size="xl" />
          </router-link>
        </div>
        <div class="md:hidden">
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    /**
     * ログアウトする.
     */
    logOut() {
      this.$store.dispatch("logoutUser");
    },
  },
};
</script>

<style></style>

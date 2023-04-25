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
          <!-- onAuthStateChangedがfalseならばこれを表示(後でv-ifを追記する) -->
          <router-link to="/login">
            <i class="hover:text-selected-text transition-all duration-300"></i
            >ログイン
          </router-link>

          <a
            href="#skills"
            class="hover:text-selected-text transition-all duration-300"
            >会員登録</a
          >
          <a href="#contact">
            <button
              class="px-6 py-2 bg-theme font-bold rounded-lg hover:bg-purple-600 transition-all duration-300"
            >
              お問い合わせ
            </button>
          </a>
        </div>
        <div class="md:hidden">
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

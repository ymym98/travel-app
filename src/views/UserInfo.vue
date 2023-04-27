<template>
  <div>
    <h1>ユーザープロフィール</h1>

    <form>
      <!-- 氏名 -->
      <div class="mb-6">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >氏名</label
        >
        <input
          :value="userName"
          id="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <!-- メールアドレス -->
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >メールアドレス</label
        >
        <input
          :value="email"
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <button
        @click="update()"
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        保存
      </button>
    </form>
  </div>
</template>

<script>
import { auth } from "../firebase";
import { updateProfile } from "firebase/auth";

export default {
  data() {
    return {
      // name: this.$store.getters.user.displayName,
      // email: this.$store.getters.user.email,
      user: {},
      userName: "",
      email: "",
    };
  },
  methods: {
    // update(){
    //   updateProfile(this.user {
    //   displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
    // }).then(() => {
    //   // Profile updated!
    //   // ...
    // }).catch((error) => {
    //   // An error occurred
    //   // ...
    // });
    // }
  },
  created() {
    this.user = auth.currentUser;
    this.userName = this.user.displayName;
    this.email = this.user.email;
  },
};
</script>

<style></style>

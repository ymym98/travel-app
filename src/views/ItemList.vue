<template>
  <div>
    <!-- 検索フォーム  検索機能を追加する-->
    <div class="flex justify-center">
      <input type="text" class="border-2 rounded-full h-9 w-64" />
      <button type="submit">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </button>
    </div>

    <!-- ホテル一覧 -->
    <div
      class="container mt-16 flex justify-between item-center mx-auto px-8 md:px-14 lg:px-14 w-full"
    >
      <div class="w-full">
        <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
          <div v-for="hotel of hotelList" :key="hotel.index">
            <img
              class="w-full h-72 lg:h-64 object-cover rounded-md"
              :src="hotel.hotelImageUrl"
            />
            <div class="text-left">
              <div class="mt-3 text-sm font-bold">{{ hotel.hotelName }}</div>
              <p class="text-xs text-gray-600">
                {{ hotel.address1 + hotel.address2 }}
              </p>
              <p class="text-xs font-bold text-gray-600">
                ¥ {{ hotel.hotelMinCharge }}~ /泊
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotelList: [],
    };
  },
};
</script>

<style></style>

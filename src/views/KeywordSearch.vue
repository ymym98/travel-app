<template>
  <div>
    <!-- 検索フォーム -->
    <div class="flex justify-center">
      <input
        type="text"
        class="border-2 rounded-full h-9 w-64"
        v-model="keyword"
      />
      <button type="submit" @click="search()">
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
            <!-- 画像をクリックしたら詳細画面に遷移 -->
            <img
              class="w-full h-72 lg:h-64 object-cover rounded-md"
              :src="hotel.hotelImageUrl"
              @click="goToDetailPage(hotel.hotelNo)"
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
      keyword: "",
    };
  },
  methods: {
    /**
     *  キーワードから該当のホテルを検索する.
     */
    async search() {
      this.hotelList = [];
      // クエリーストリングを作成
      const baseUrl =
        "https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?";

      const params = {
        applicationId: "1043924183484318213",
        keyword: this.keyword,
      };
      const queryParams = new URLSearchParams(params);
      console.log(baseUrl + queryParams);

      // fetchでJSON取得
      const response = await fetch(baseUrl + queryParams).then((response) =>
        response.json()
      );
      console.log(response);
      for (let i = 0; i < response.hotels.length; i++) {
        const hotel = response.hotels[i].hotel[0].hotelBasicInfo;

        this.hotelList.push(hotel);
      }
    },

    /**
     * 画像をクリックしたホテルの詳細画面に遷移する.
     * @param {*} id - hotelNo
     */
    goToDetailPage(id) {
      console.log("ホテルのナンバー：", id);
      this.$router.push(`/hotelDetail/${id}`);
    },
  },
  async mounted() {
    // クエリーストリングを作成
    const baseUrl =
      "https://app.rakuten.co.jp/services/api/Travel/SimpleHotelSearch/20170426?";

    const params = {
      applicationId: "1043924183484318213",
      largeClassCode: "japan",
      middleClassCode: "tokyo",
      smallClassCode: "tokyo", // 東京23区
      detailClassCode: "A", //  東京駅・銀座・日本橋
    };
    const queryParams = new URLSearchParams(params);
    console.log(baseUrl + queryParams);

    // fetchでJSON取得
    const response = await fetch(baseUrl + queryParams).then((response) =>
      response.json()
    );
    console.log(response);
    for (let i = 0; i < response.hotels.length; i++) {
      const hotel = response.hotels[i].hotel[0].hotelBasicInfo;

      this.hotelList.push(hotel);
    }
  },
};
</script>

<style></style>

<template>
  <div>
    <div class="container mx-auto mt-6">
      <div class="w-3/5 container mx-auto">
        <div class="object-cover">
          <img :src="hotelInfo[0].hotelImageUrl" />
          <img :src="hotelInfo[0].hotelMapImageUrl" />
          <img :src="hotelInfo[0].roomImageUrl" />
        </div>
        <div class="flex mt-3 justify-between">
          <span class="text-lg font-bold">
            {{ hotelInfo[0].hotelName }}
          </span>
          <span>
            <font-awesome-icon :icon="['fas', 'star']" size="xs" />
            {{ hotelInfo[0].reviewAverage }}
          </span>
        </div>
        <div class="text-xs text-gray-500 mt-3">
          〒 {{ hotelInfo[0].postalCode }}
          {{ hotelInfo[0].address1 }}
          {{ hotelInfo[0].address2 }}
        </div>
        <div>
          {{ hotelInfo[0].access }}
        </div>
        <div class="mt-7 text-sm">
          {{ hotelInfo[0].hotelSpecial }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Initialization for ES Users
import { Carousel, initTE } from "tw-elements";

initTE({ Carousel });

export default {
  data() {
    return {
      // ホテルの詳細情報を格納する配列
      hotelInfo: [],
    };
  },

  /**
   * createdでURLからhotelNoを取得し、APIから詳細情報を取得する.
   */
  async created() {
    // クエリーストリングを作成
    const baseUrl =
      "https://app.rakuten.co.jp/services/api/Travel/HotelDetailSearch/20170426?";

    const params = {
      applicationId: "1043924183484318213",
      hotelNo: parseInt(this.$route.params.id),
    };
    const queryParams = new URLSearchParams(params);
    console.log(baseUrl + queryParams);

    // fetchでJSON取得
    const response = await fetch(baseUrl + queryParams).then((response) =>
      response.json()
    );
    console.log(response);

    // 階層が深いのでhotelBasicInfoのみpushする
    this.hotelInfo.push(response.hotels[0].hotel[0].hotelBasicInfo);

    console.log("hotelInfoの中身:", this.hotelInfo);
  },

  methods: {},
};
</script>

<style></style>

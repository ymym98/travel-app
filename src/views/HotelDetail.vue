<template>
  <div>
    <div>
      {{ hotelInfo[0].hotelName }}
    </div>
    <img :src="hotelInfo[0].hotelImageUrl" alt="" />
  </div>
</template>

<script>
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

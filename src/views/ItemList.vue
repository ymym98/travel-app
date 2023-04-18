<template>
  <div>
    {{ searchResults }}
    <button @click="search()">表示</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
      searchResults: [],
    };
  },
  methods: {
    async search() {
      // クエリーストリングを作成
      const baseUrl =
        "https://app.rakuten.co.jp/services/api/Travel/HotelRanking/20170426?";

      const params = {
        applicationId: "1043924183484318213",
        genre: "onsen", // ジャンル指定
      };
      const queryParams = new URLSearchParams(params);
      console.log(baseUrl + queryParams);

      // fetchでJSON取得
      const response = await fetch(baseUrl + queryParams).then((response) =>
        response.json()
      );
      console.log(response);
      // 必要な情報を配列にpush
      for (let i = 0; i < response.Rankings[0].Ranking.hotels.length; i++) {
        const hotel = response.Rankings[0].Ranking.hotels[i].hotel;
        const hotelName = hotel.hotelName; // ホテル名

        this.searchResults.push(hotelName);
      }
    },
  },
};
</script>

<style></style>

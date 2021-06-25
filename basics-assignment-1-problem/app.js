Vue.createApp({
  data() {
    return {
      name: "Wagner Paz",
      age: 35,
      image:
        "http://www.metapriori.com.br/wp-content/uploads/2018/09/metapriori_logo.png",
    };
  },
  methods: {
    generateFavoriteNumber() {
      return Math.random();
    },
  },
}).mount("#assignment");

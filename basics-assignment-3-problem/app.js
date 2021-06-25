Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  computed: {
    result() {
      if (this.count < 37) {
        return "Not there yet";
      } else if (this.count > 37) {
        return "Too much!";
      } else {
        return "You did it! 37!";
      }
    },
  },
  watch: {
    result() {
      setTimeout(() => (this.count = 0), 5000);
    },
  },
  methods: {
    add(num) {
      this.count += num;
    },
  },
}).mount("#assignment");

Vue.createApp({
  data() {
    return {
      classInput: "",
      visible: true,
      backgroundColor: "",
    };
  },
  methods: {
    changeVisibility() {
      this.visible = !this.visible;
    },
  },
}).mount("#assignment");

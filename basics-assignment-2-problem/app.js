Vue.createApp({
  data() {
    return {
      inputValue: "",
      inputValue2: "",
      confirmedInput: "",
    };
  },
  methods: {
    showAlert() {
      alert("An alert!!");
    },
    registerInput(event) {
      this.inputValue = event.target.value;
    },
    registerInput2(event) {
      this.inputValue2 = event.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.inputValue2;
    },
  },
}).mount("#assignment");

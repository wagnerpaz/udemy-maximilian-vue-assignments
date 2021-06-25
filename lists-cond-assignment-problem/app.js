Vue.createApp({
  data() {
    return {
      shown: true,
      taskInput: "",
      tasks: [],
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskInput);
      this.taskInput = "";
    },
    toogleShow() {
      this.shown = !this.shown;
    },
  },
}).mount("#assignment");

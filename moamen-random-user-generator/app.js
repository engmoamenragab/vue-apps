const app = {
  data() {
    return {
      firstName: "Moamen",
      lastName: "Ragab",
      email: "eng.moamen.ragab@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg"
    };
  },
  methods: {
    async getUser() {
      const response = await fetch("https://randomuser.me/api");
      const data = await response.json();
      this.firstName = data.results[0].name.first;
      this.lastName = data.results[0].name.last;
      this.email = data.results[0].email;
      this.gender = data.results[0].gender;
      this.picture = data.results[0].picture.large;
    }
  }
};
Vue.createApp(app).mount("#app");
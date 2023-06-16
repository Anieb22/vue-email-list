const { createApp } = Vue;

createApp({
  data() {
    return {
      randomEmail: '',
      arrayEmail: []
    }
  },
  mounted() {
    this.randomEmailGenerated();
  },
  methods: {
    randomEmailGenerated() {
      for (let i = 1; i <= 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((response) => {
            this.arrayEmail.push(response.data.response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  },
}).mount('#app');

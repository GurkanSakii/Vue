const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Master the course and learn Vue!',
            courseGoalA: '0.5ten küçük',
            courseGoalB: '0.5ten büyük',
/*             courseGoalB: '<h2>0.5e eşit</h2>', */
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }

});

app.mount('#user-goal');
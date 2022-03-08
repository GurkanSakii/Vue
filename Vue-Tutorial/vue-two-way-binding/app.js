const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
 /*      fullname: '' */
    };
  },
  watch: {
/*     name(value) {
        if(value === ''){
            this.fullname = '';
        }
        this.fullname = value + '' + this.lastName
    },
    lastName(value) {
        if(value === ''){
            this.fullname = '';
        }
        this.fullname = this.name + '' + value
    } */

    counter(value) {
        if(value > 50){
            this.counter = 0;
        }
    }
  },
  computed: {
      fullname() {
          console.log("x")
        if(this.name === '' || this.lastName === ''){
            return '';
        }
        return this.name + ' ' + this.lastName
      }
  },
  methods: {
    outputFullname(){
        console.log("y")
        if(this.name === ''){
            return '';
        }
        return this.name + ' ' + 'Saki'
    },
    setName(event, lastName) {
      this.name = event.target.value ;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
        this.name = "";
    }

  }
});

app.mount('#events');

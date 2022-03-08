const app = Vue.createApp({
    data(){
        return {
            friends: [
            { 
                id: 'manuel', 
                name: 'Manuel Lorenz',
                phone: '01234 567 89 01', 
                email: 'ezel@hotmail.com',
            },
            { 
                id: 'gagacım', 
                name: 'lorenza antoniy Lorenz',
                phone: '123123 555567 8319 7', 
                email: 'eyşan@hotmail.com',
            },

            ]
        }
    }
});

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails(friend.id)">{{ detailsAreVisible ? 'Hide': 'Show'}} Detail</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone}}</li>
            <li><strong>Email:</strong> {{ friend.email}}</li>
        </ul>
    </li>
  `,
    data() {
        return { 
            detailsAreVisible: false,
            friend: 
            { 
                id: 'manuel', 
                name: 'Manuel Lorenz',
                phone: '01234 567 89 01', 
                email: 'ezel@hotmail.com',
            },
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount("#app");
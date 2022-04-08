import { createStore } from "vuex";

const store = createStore({
  state: {
    person: {
      name: "Gurkan",
      lname: "Saki",
      age: 33,
      address: {},
      password: 123123123,
      tc: 11111,
    },
    theme: "dark",
    fullName: "Defne Kandemir",
    permissions: [1, 2, 3, 4, 5],
    userList: ["Gürk", "Nam", "La", "Ra", "KX", "Hu", "Ye"],
    itemList: [
      { id: 1, title: "Masa", type: "mobilya" },
      { id: 2, title: "Sandalye", type: "mobilya" },
      { id: 3, title: "TV", type: "elektronik" },
      { id: 4, title: "Monitor", type: "elektronik" },
      { id: 5, title: "Bardak", type: "plastik" },
    ],
  },
  mutations: {
    newItemAdd(state, payload){
        state.itemList.push(payload)
    }
  },
  actions: {
        newItem(context, item){
            setTimeout(() => {
                context.commit('newItemAdd', item)
            }, 2000);
        }
  },
  getters : {
      woodItems : state => state.itemList.filter(i => i.type == 'mobilya'),
      activeUser(state){
         const user = { ...state.person}
         delete user.password;
         return user;
      }
  }
});

export default store;

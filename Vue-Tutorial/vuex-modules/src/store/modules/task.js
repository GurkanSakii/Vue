export default {
    namespaced: true,
    state: {
        itemList: 'aaa',
        userList: []
    },
    mutations: {
        setItem(state,item){
       state.itemList.push(item)
        }
    },
    getters: {
        itemmm: state => state.itemList
    }
}
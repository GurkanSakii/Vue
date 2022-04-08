export default {
    namespaced: true,
    state: {
        contactName: 'puresol',
        contactAddress: 'Kanada',
        propert : []

    },
    mutations: {
        setItem(state,name){
            state.contactName = name;
        }
    },
    getters: {
        contacttt: state => state.contactName
    }
}
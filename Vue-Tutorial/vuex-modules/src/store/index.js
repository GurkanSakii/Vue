import { createStore } from 'vuex';
import contact from './modules/contact'
import task from './modules/task'

const store = createStore({
    state: {
        mainName: 'Gurkan'
    },
    modules: {
        musteri: contact,
        task
    }
})

export default store
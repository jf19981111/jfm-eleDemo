// 仓库的总分支
import Vue from 'vue'
import Vuex from 'vuex'
import seller from './seller'

Vue.use(Vuex)

// 暴露仓库的实例对象
const store = new Vuex.Store({
    modules: {
        seller: seller
    }

})

export default store;
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as uz from '../common/js/uz'

Vue.use(Vuex)

const state = {
    'headerTitle': '福利',
    'menus': uz.NAME_TITILE,
    'menuShow': false,
    'loadingShow': false,
    'news': 5
}

const mutations = {
    // 存放状态变更函数
    UPDATE_TITLE(state, title) {
        console.log(title)
        state.headerTitle = title
    },
    UPDATE_MENUSHOW(state) {
        state.menuShow = !state.menuShow
    },
    UPDATE_LOADING(state, data) {
        state.loadingShow = data
    },
    UPDATE_NEWS(state) {
        state.news = 0
    }
}

// 整合初始状态和变更函数，我们就得到了我们所需的 store
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
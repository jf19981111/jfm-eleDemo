// 仓库的 商家模块

import axios from 'axios'

export default {
    namespaced: true,

    state: {
        menus: [],
        flavor: '',
        active: '',
        loading: false, // 是否在请求数据
        // finished: false, // 代表数据是否没有更多了
        list: [], // 商家列表

        pageNum: 0, // 第几页
        pageSize: 8, // 每页几条
        totalSize: 10// 一共几条
    },

    getters: {
        totalPage(state) {
            return Math.ceil(state.totalSize / state.pageSize)
        },
        finished(state,getters) {
            return state.pageNum >= getters.totalPage
        }
    },

    mutations: {
        changeLoading(state,f) {
            state.loading = f
        },
        changeList(state,menus) {
            state.menus = state.menus.concat(menus)
        },
        changeTotalSize(state, num) {
            state.totalSize = num
        },
        addPageNum(state) {
            state.pageNum++
        },
    },

    actions: {
        /**
    * 加载数据
    */
        onLoad({ commit,state }) {
            commit('addPageNum')
            axios.get('/json/content.json', {
                params: {
                    pageNum: state.pageNum,
                    pageSize: state.pageSize
                }
            }).then(res => {
                var data = res.data.items
                // console.log(data)
                // 前端处理分页
                this.totalSize = data.length
                // console.log(data.length)
                commit('changeTotalSize',data.length)
                commit('changeList', data.splice((state.pageNumber - 1) * state.pageSize, state.pageSize))
                // this.menus = res.data.items
                commit('changeLoading',false)
            })
        },
    },
}
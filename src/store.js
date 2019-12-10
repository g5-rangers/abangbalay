
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        status: '',
        token: localStorage.getItem('jwt') || '',
        user: {}
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, token, user) {
            state.status = 'success'
            state.token = token
            state.user = user
        },
        auth_error(state) {
            state.status = 'error'
        },
        logout(state) {
            state.status = ''
            state.token = ''
        },
    },
    actions: {
        loginAsync({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios.post("http://localhost:4000/user/login", user)
                    .then(resp => {
                        console.log(resp)
                        const token = resp.data.access_token
                        const user = resp.data.user
                        if (token) {
                            localStorage.setItem('jwt', token)
                            sessionStorage.setItem('Email', resp.data.user.email)
                        }
                        axios.defaults.headers.common['Authorization'] = token
                        commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error')
                        reject(err.response)
                    })
            })
        },
        registerAsync({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios.post("http://localhost:4000/user/register", user)
                    .then(resp => {
                        const token = resp.data.access_token
                        const user = resp.data.user
                        console.log(resp)
                        axios.defaults.headers.common['Authorization'] = token
                        commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        console.log(err)
                        commit('auth_error', err)
                        reject(err)
                    })
            })
        },
        updateAsync({ commit }, data) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                console.log(data)
                axios.put("http://localhost:4000/user/updateAccount", data)
                    .then(resp => {
                        const token = localStorage.getItem('jwt')
                        const user = resp.data
                        console.log(resp)
                        axios.defaults.headers.common['Authorization'] = token
                        sessionStorage.setItem('Email', resp.data.email)
                        commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        console.log(err)
                        commit('auth_error', err)
                        reject(err)
                    })
            })
        },
        logout({ commit }) {
         return new Promise((resolve) => {
             commit('logout')
             localStorage.removeItem('jwt')
             sessionStorage.clear()
             delete axios.defaults.headers.common['Authorization']
             resolve()
         })
        }
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
    }
})
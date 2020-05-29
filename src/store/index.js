import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loading: {
            message: '',
            status: false
        }
    },
    mutations: {
        showLoading(state, message) {
            state.loading.message = message
            state.loading.status = true
        },
        hideLoading(state) {
            setTimeout(() => state.loading.status = false, 1000)
        }
    },
    actions: {},
    modules: {},
});

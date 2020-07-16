import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});

export default new Vuex.Store({
    state: {
        user: {},
        loggedInStatus: false
    },
    getters: {
        getUser(state) {
            return state.user;
        },
        getLoggedInStatus(state) {
            return state.loggedInStatus;
        }
    },
    mutations: {
        ["update_user"](state, user) {
            state.user = user;
            state.loggedInStatus = true;
        },
        ["logout"](state) {
            state.loggedInStatus = false;
            state.user = {};
        }
    },
    modules: {},
    plugins: [vuexLocal.plugin]
});

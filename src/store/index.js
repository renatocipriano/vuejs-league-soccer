import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import teams from "./teams";
import matches from "./matches";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        teams,
        matches
    },
    plugins: [createPersistedState()],
    strict: process.env.DEV,
})

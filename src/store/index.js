import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: localStorage.getItem("token"),
        nick: localStorage.getItem("nick"),
        comment: false,
        handle: false,
        pageColor: "#faf5eb repeat",
        pageFont: "",
        pageSize: "18px",
        pageWidth: "800px",
    },
    mutations: {
        showComment(state) {
            state.comment = !state.comment;
        },
        showHandle(state) {
            state.handle = !state.handle;
        },
        changePageColor(state, n) {
            state.pageColor = n;
        },
        changePageFont(state, n) {
            state.pageFont = n;
        },
        changePageSize(state, n) {
            state.pageSize = n + "px";
        },
        changePageWidth(state, n) {
            state.pageWidth = n + "px";
        },
        restore(state) {
            state.pageColor = "#faf5eb repeat";
            state.pageFont = "";
            state.pageSize = "18px";
            state.pageWidth = "800px";
        }
    }
})

export default store
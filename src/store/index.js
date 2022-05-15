import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: localStorage.getItem("token"),
        nick: localStorage.getItem("nick"),
        comment: false,
        handle: false,
        list: false,
        pageColor: "#faf5eb repeat",
        pageFont: "",
        pageSize: "18px",
        pageWidth: "800px",
        is_center_show: true,
        table: {
            is_show_notice: false,
            is_updata: false,
        },
        reply_data: {},
    },
    mutations: {
        make(state, n) {
            state.reply_data = n;
        },
        open_reply_list(state) {
            state.is_center_show = !state.is_center_show;
        },
        addnotice(state) {
            state.table.is_show_notice = !state.table.is_show_notice;
        },
        updata(state) {
            state.table.is_updata = !state.table.is_updata;
        },
        showComment(state) {
            state.comment = !state.comment;
        },
        showHandle(state, n) {
            if (n == 0) {
                state.handle = !state.handle;
                state.list = false;
            } else if (n == 1) {
                state.list = !state.list;
                state.handle = false;
            }
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
        },
    }
})

export default store
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createStore } from "vuex";

import "@fortawesome/fontawesome-free/js/all";

const store = createStore({
	state() {
		return {
			collapsed: true,
			SIDEBAR_WITH: 180,
			SIDEBAR_WITH_COLLAPSED: 38,
		};
	},
	mutations: {
		/* 		Sidebarwiths(stat) {
			if (collapsed == false) {
				stat.current_width = stat.SIDEBAR_WITH;
			} else {
				stat.current_width = stat.SIDEBAR_WITH_COLLAPSED;
			}
		}, */
		toggleSidebar(state) {
			state.collapsed = !state.collapsed;
		},
	},
	getters: {
		collapsed(state) {
			return state.collapsed;
		},
		Sidebarwiths(stat) {
			if (stat.collapsed == false) {
				return `${stat.SIDEBAR_WITH}px`;
			} else {
				return `${stat.SIDEBAR_WITH_COLLAPSED}px`;
			}
		},
		SIDEBAR_WITH(stat) {
			return stat.SIDEBAR_WITH;
		},
		SIDEBAR_WITH_COLLAPSED(stat) {
			return stat.SIDEBAR_WITH_COLLAPSED;
		},
	},
	actions: {
		toggleSidebar(context) {
			context.commit("toggleSidebar");
		},
	},
});

/* const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app"); */
createApp(App).use(store).use(router).mount("#app");

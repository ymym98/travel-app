import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faMagnifyingGlass,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

Vue.config.productionTip = false;

/* add icons to the library */
library.add(faUserSecret, faMagnifyingGlass, faStar, faUser);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

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
} from "@fortawesome/free-solid-svg-icons";

Vue.config.productionTip = false;

/* add icons to the library */
library.add(faUserSecret, faMagnifyingGlass, faStar);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

export default {
  // created() {
  //   auth.onAuthStateChanged((user) => {
  //     setPersistence(auth, browserSessionPersistence)
  //       .then(() => {
  //         console.log("main.tsのuser:", user);
  //       })
  //       .catch((error) => {
  //         // Handle Errors here.
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         console.log("main.tsのerrorCode:", errorCode);
  //         console.log("main.tsのerrorMessage:", errorMessage);
  //       });
  //   });
  // },
};

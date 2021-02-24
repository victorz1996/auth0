import Vue from "vue";
import { domain, clientId } from "../auth_config.json";
import { Auth0Plugin } from "../auth";
import router from 'vue-router'

Vue.use(Auth0Plugin, {
    domain,
    clientId,
    onRedirectCallback: appState => {
      router.push(
        appState && appState.targetUrl
          ? appState.targetUrl
          : window.location.pathname
      );
    }
  });
  
  Vue.config.productionTip = false;
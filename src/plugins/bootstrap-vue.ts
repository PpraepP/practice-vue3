import {App} from "vue";

import BootstrapVue from "bootstrap-vue";

export const initBootstrap = (app: App<Element>) => {
    app.use(BootstrapVue);
}


import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import AuthModule from "@module/Auth" // for example
import VueModular from '@/plugins/VueModular.js';

function bootApp() {
    createApp(App)
        .use(VueModular,
            {
                /**
                 * list of your modules to install in vue app (required)
                 */
                modules: [
                    AuthModule
                ],

                /**
                 * You can pass default config to vue app like router , ... (optional)
                 */
                configs: {
                    router
                }
            })
        .use(createPinia())
        .mount('#app');

}

bootApp();


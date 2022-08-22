import {createRouter, createWebHistory} from 'vue-router'

const createRouterInstance = () => {
    return createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: []
    })
}


export default {
    install: (app, options={configs:[]}) => {
        const modules = options.modules || [];
        const {router = createRouterInstance()} = options.configs;
        modules.forEach(module => module.install({router}));
        app.use(router);
    },


};

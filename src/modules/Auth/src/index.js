import router from "./router"
import './assets/style.css'

export default {
    install(app) {
        router.forEach(route => app.router.addRoute(route));
    }
}


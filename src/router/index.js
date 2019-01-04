import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './routers.js'
import iView from 'iview'
import {getToken} from '../libs/util.js'
import Config from '../config/config.js'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'hash',
    routes: routers
});

function getMenuId(routes, path) {
    for (let i = 0; i < routes.length; i++) {
        if (path.indexOf(routes[i].request) >= 0) {
            Config.menu.opens = [routes[i].parent_code];
            Config.menu.active = routes[i].code;
            break;
        }
        if (routes[i].menuBeans)
            getMenuId(routes[i].menuBeans, path);
    }
}

router.beforeEach((to, from, next) => {
    if (to.meta.title)
        document.title = to.meta.title;
    iView.LoadingBar.start();
    const token = getToken();
    if (!token && to.meta.isLogin) {
        next({name: 'login'});
        return;
    }
    next();
});

router.afterEach(to => {
    iView.LoadingBar.finish();
    if (Vue.localStorage.get('menus'))
        getMenuId(JSON.parse(Vue.localStorage.get('menus')), to.path);
    window.scrollTo(0, 0)
});

export default router

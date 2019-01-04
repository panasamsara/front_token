const routers = [{
    path: '/',
    redirect: {
        name: 'login'
    }
}, {
    path: '/login',
    name: 'login',
    meta: {
        isLogin: false
    },
    component: (resolve) => require(['../views/login.vue'], resolve)
}, {
    path: '/master',
    name: 'master',
    meta: {
        isLogin: true
    },
    children: [{
        path: 'home',
        name: 'home',
        meta: {
            isLogin: true,
            breadcrumb: '首页'
        },
        component: (resolve) => require(['../views/home.vue'], resolve)
    }, {
        path: 'change_password',
        name: 'change_password',
        meta: {
            isLogin: true,
            breadcrumb: '设置/修改密码'
        },
        component: (resolve) => require(['../views/change_password.vue'], resolve)
    }, {
        path: 'articles',
        name: 'articles',
        meta: {
            isLogin: true,
            breadcrumb: '所有文章'
        },
        component: (resolve) => require(['../views/articles.vue'], resolve)
    }, {
        path: 'users',
        name: 'users',
        meta: {
            isLogin: true,
            breadcrumb: '设置/用户'
        },
        component: (resolve) => require(['../views/users.vue'], resolve)
    }, {
        path: 'role',
        name: 'role',
        meta: {
            isLogin: true,
            breadcrumb: '设置/角色'
        },
        component: (resolve) => require(['../views/role.vue'], resolve)
    }, ],
    component: (resolve) => require(['../views/master.vue'], resolve)
}];
export default routers;
export default {

    routes: [{
        path: '/login',
        name: 'login',
        component: resolve => require(['components/modules/Login.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/createaccount',
        name: 'createaccount',
        component: resolve => require(['components/modules/CreateAccount.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/about',
        name: 'about',
        component: resolve => require(['components/modules/About.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: resolve => require(['components/modules/Owner/Dashboard.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/account',
        name: 'account',
        component: resolve => require(['components/modules/Owner/Account.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    }
    
    ]
}

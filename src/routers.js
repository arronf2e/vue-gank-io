const App = resolve => require(['./App.vue'], resolve)
const Welfare = resolve => require(['./components/welfare/welfare.vue'], resolve)
const Recommand = resolve => require(['./components/recommand/recommand.vue'], resolve)
const Android = resolve => require(['./components/android/android.vue'], resolve)
const Ios = resolve => require(['./components/ios/ios.vue'], resolve)
const Web = resolve => require(['./components/web/web.vue'], resolve)

const routers = [{
    path: '/',
    name: 'index',
    component: App,
    redirect: '/welfare',
    children: [{
        path: '/welfare',
        name: 'welfare',
        component: Welfare
    }, {
        path: '/day',
        name: 'recommand',
        component: Recommand
    }, {
        path: '/android',
        name: 'android',
        component: Android
    }, {
        path: '/ios',
        name: 'ios',
        component: Ios
    }, {
        path: '/web',
        name: 'web',
        component: Web
    }]
}]

export default routers
const App = resolve => require(['./App.vue'], resolve)
const Welfare = resolve => require(['./components/welfare/welfare.vue'], resolve)

const routers = [{
    path: '/',
    name: 'index',
    component: App,
    children: [{
        path: '/welfare',
        name: 'welfare',
        component: Welfare
    }]
}]

export default routers
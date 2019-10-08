import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import ShoesList from './views/shoes/ShoesList'
import Shoe from './views/shoes/Shoe'
import ShoeCreate from "./views/shoes/ShoeCreate";
import ShoeEdit from "./views/shoes/ShoeEdit";

Vue.use(Router)

export default new Router(
    {
        mode: 'history',
        base: process.env.BASE_URL,
        routes: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/shoes',
                name: 'shoes',
                component: ShoesList
            },
            {
                path: '/shoes/create',
                name: 'shoecreate',
                component: ShoeCreate
            },
            {
                path: '/shoes/:id',
                name: 'shoe',
                component: Shoe
            },
            {
                path: '/shoes/:id/edit',
                name: 'shoeedit',
                component: ShoeEdit
            }
        ]
    }
)
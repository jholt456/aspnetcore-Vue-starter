

export const routes = [
  { name: 'home', path: '/', component: require('../components/home-page.vue').default, display: 'Home', icon: 'home' },
  { name: 'counter', path: '/counter', component: require('../components/counter-example.vue').default, display: 'Counter', icon: 'graduation-cap' },
  { name: 'fetch-data', path: '/fetch-data', component: require('../components/fetch-data.vue').default, display: 'Fetch data', icon: 'list' }
]

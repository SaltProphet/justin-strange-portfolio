import HomePage from '../pages/Home/HomePage.jsx'
import ShopOfHorrorsPage from '../pages/ShopOfHorrors/ShopOfHorrorsPage.jsx'

const routes = [
  { path: '/', component: HomePage },
  { path: '/shop-of-horrors', component: ShopOfHorrorsPage },
  { path: '*', component: HomePage },
]

export default routes

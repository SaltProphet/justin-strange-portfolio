import routes from './config/routes.js'

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const route = routes.find((entry) => entry.path === path) || routes.find((entry) => entry.path === '*')
  const Page = route.component

  return <Page />
}

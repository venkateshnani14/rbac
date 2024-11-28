import Cookies from 'js-cookie'
import { Navigate, Outlet } from "react-router-dom"

const Protected = () => {
  const auth = Cookies.get('artk')
  return auth ? <Outlet /> : <Navigate to={'/login'} />
}

export default Protected
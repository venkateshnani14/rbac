import { AuthProvider } from './helpers/AuthProvider'
import RouteProtector from './helpers/RouteProtector'
import './index.css'
import LoginPage from './routes/auth/Login'
import { Routes, Route } from 'react-router-dom'
import AdminDashboard from './routes/admin/dashboard/page'
import Protected from './custom-components/protected'
import Homepage from './routes/homepage/page'

function App() {
  return (
   <AuthProvider>
   <Routes>
    <Route element={<LoginPage />} path='/login' />
    <Route element={<Protected />}>
    <Route path='/' element={<Homepage />} />
    <Route path='/admin-dashboard' element={<RouteProtector children={<AdminDashboard />} allowedRoles={['ADMIN']} />} />
    </Route>
   </Routes>
   </AuthProvider>
  )
}

export default App

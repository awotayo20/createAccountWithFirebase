import { Navigate, Route, redirect } from 'react-router-dom'
import { useAuth } from './context/AuthContext'

const PrivateRoute = ({ element }) => {
  const { currentUser } = useAuth()

  return currentUser ? element : <Navigate to="/login" />
}

export default PrivateRoute

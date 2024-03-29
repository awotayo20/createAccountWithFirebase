import Signup from './Signup'
import { Container } from 'react-bootstrap'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'

function App() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
      >
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <Router>
            <AuthProvider>
              <Routes>
                <Route
                  path="/"
                  element={<PrivateRoute element={<Dashboard />} />}
                />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
              </Routes>
            </AuthProvider>
          </Router>
          {/* <Signup /> */}
        </div>
      </Container>
    </AuthProvider>
  )
}

export default App

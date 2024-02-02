import { useState } from 'react'
import { Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from './context/AuthContext'
import { Link, Navigate } from 'react-router-dom'

export default function Dashboard() {
  const [error, setError] = useState()
  const [userLogout, setUserLogout] = useState(false)
  const { currentUser, logout } = useAuth()
  async function handleLogout() {
    setError('')

    try {
      await logout()
      setUserLogout(true)
    } catch (err) {
      console.log(err)
      setError('Failed to log out')
    }
  }

  return (
    <>
      {userLogout ? (
        <Navigate to={'/login'} />
      ) : (
        <>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Dashboard</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <strong>Email:</strong>
              {currentUser.email}
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </>
      )}
    </>
  )
}

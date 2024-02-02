import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../components/context/AuthContext'
import { Link, Navigate } from 'react-router-dom'

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [userLogin, setUserLogin] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage('Check your Email for further instructions')
    } catch (err) {
      setError('Failed to Reset Password')
      console.log(err)
    }
    setLoading(false)
  }

  return (
    <>
      {userLogin && <Navigate to={'/'} />}
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Reset Password</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>

            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Rest Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">login</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to={'/signup'}>Sign Up</Link>
      </div>
    </>
  )
}

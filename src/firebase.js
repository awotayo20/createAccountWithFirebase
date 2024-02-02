import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAwxFvk-PTWhEbbrw48sQ-LFMtHR_OL6oA',
  authDomain: 'auth-development-3c5a8.firebaseapp.com',
  projectId: 'auth-development-3c5a8',
  storageBucket: 'auth-development-3c5a8.appspot.com',
  messagingSenderId: '588914070697',
  appId: '1:588914070697:web:921d9bfc4894a915ba45b8',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
export default app

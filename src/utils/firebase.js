import firebase from 'firebase/compat/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/performance'
import 'firebase/analytics'
import config from './config'

const app = firebase.initializeApp(config.firebase)

// export const database = getDatabase(app)

export default app

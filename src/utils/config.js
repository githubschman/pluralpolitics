export default {
  firebase: {
    apiKey: process && process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process && process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process && process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process && process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process && process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process && process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process && process.env.REACT_APP_FIREBASE_APP_ID,
  },
}

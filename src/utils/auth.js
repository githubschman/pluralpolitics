/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebase from './firebase';

const utils = {
    loginWithGoogle: (cb) => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
          .then((result) => {
             if (result.user) {
               cb(result.user)
             }
            }).catch(console.error)
    }
}

export default utils

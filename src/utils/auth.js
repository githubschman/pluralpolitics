/* eslint-disable no-console */
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// eslint-disable-next-line no-unused-vars
import firebase from './firebase';

const utils = {
    loginWithGoogle: (cb) => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;
            // // The signed-in user info.
            // const user = result.user;
            //  console.log(result.user)
             if (result.user) {
               cb(result.user)
             }
            }).catch(console.error)
    }
}

export default utils

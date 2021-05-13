import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const firebaseInitialize = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    else {
        firebase.app();
    }
}

export const signOut = () => {
    firebase.auth().signOut()
        .then(() => {
            const userSignOut = {
                name: '',
                email: '',
                password: '',
                error: '',
                success: false
            }
            return userSignOut;
        }).catch((error) => {
            console.log(error);
        });
}

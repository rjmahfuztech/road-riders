import React, { useContext } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
else {
    firebase.app();
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signInUser = {
                    name: displayName,
                    email
                };
                setUserToken();
                setLoggedInUser(signInUser);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(true).then(function (idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div className="container text-center margin d-flex justify-content-center">
            <div className="login-style">
                <h2 className="mb-4">Continue with google</h2>
                <button className="button-style" onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGooglePlusG} /> Google</button>
            </div>
        </div>
    );
};

export default Login;
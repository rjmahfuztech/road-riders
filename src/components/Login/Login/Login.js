import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router";
import LoginForm from "./LoginForm";
import { firebaseInitialize } from "./LoginManager";

firebaseInitialize();

const Login = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
  const [newUser, setNewUser] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [loginError, setLoginError] = useState({
    email: false,
    password: false,
  });
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const userData = result.user;
        setLoggedInUser(userData);
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleBlur = (e) => {
    let isFormValid = true;
    if (e.target.name === "email") {
      const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
      isFormValid = isEmailValid;
    } else {
      const loginErrorInfo = { ...loginError };
      loginErrorInfo.password = true;
      setLoginError(loginErrorInfo);
    }

    if (e.target.name === "password") {
      const isPasswordValid =
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
          e.target.value
        );
      isFormValid = isPasswordValid;
    } else {
      const loginErrorInfo = { ...loginError };
      loginErrorInfo.email = true;
      setLoginError(loginErrorInfo);
    }

    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((data) => {
          alert("Please verify your email address");
          data.user
            .sendEmailVerification()
            .then(() => {
              const newUserInfo = { ...user };
              newUserInfo.error = "";
              newUserInfo.success = true;
              updateUserName(user.name);
              setUser(newUserInfo);
              setLoggedInUser(newUserInfo);
              history.replace(from);
            })
            .catch(() => alert("Sorry, please verify your email"));
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }

    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((data) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    e.target.reset();
  };

  const updateUserName = (name) => {
    const userName = firebase.auth().currentUser;
    userName
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        // Update successful.
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="mt-5 mb-3">
        <LoginForm
          handleGoogleSignIn={handleGoogleSignIn}
          user={user}
          setUser={setUser}
          newUser={newUser}
          setNewUser={setNewUser}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          loginError={loginError}
        ></LoginForm>
      </div>
    </div>
  );
};

export default Login;

import Home from "./components/Home/Home/Home";
import firebase from "firebase/app";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./components/Admin/Admin/Admin";
import Login from "./components/Login/Login/Login";
import { createContext, useEffect, useState } from "react";
import NotFound from "./components/NotFound/NotFound";
import AddService from "./components/Admin/AddService/AddService";
import AddAdmin from "./components/Admin/AddAdmin/AddAdmin";
import Book from "./components/Admin/Book/Book";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import BookingList from "./components/Admin/BookingList/BookingList";
import OrderList from "./components/Admin/OrderList/OrderList";
import ManageService from "./components/Admin/ManageService/ManageService";
import AddReview from "./components/Admin/AddReview/AddReview";
import { firebaseInitialize } from "./components/Login/Login/LoginManager";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    firebaseInitialize();
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setLoggedInUser(user);
      } else {
        setLoggedInUser("");
      }
    });
  }, []);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <OrderList />
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin />
          </PrivateRoute>
          <PrivateRoute path="/manage">
            <ManageService />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/book/:ById">
            <Book />
          </PrivateRoute>
          <PrivateRoute path="/bookingList">
            <BookingList />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <AddReview />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

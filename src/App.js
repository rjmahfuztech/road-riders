import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from './components/Admin/Admin/Admin';
import Login from './components/Login/Login/Login';
import { createContext, useState } from 'react';
import NotFound from './components/NotFound/NotFound';
import AddService from './components/Admin/AddService/AddService';
import AddAdmin from './components/Admin/AddAdmin/AddAdmin';
import Book from './components/Admin/Book/Book';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import BookingList from './components/Admin/BookingList/BookingList';
import OrderList from './components/Admin/OrderList/OrderList';
import ManageService from './components/Admin/ManageService/ManageService';
import AddReview from './components/Admin/AddReview/AddReview';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

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
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/orders">
            <OrderList />
          </Route>
          <Route path="/service">
            <AddService />
          </Route>
          <Route path="/addAdmin">
            <AddAdmin />
          </Route>
          <Route path="/manage">
            <ManageService />
          </Route>
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

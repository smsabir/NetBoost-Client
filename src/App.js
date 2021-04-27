import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddAdmin from "./components/Dashboard/AddAdmin/AddAdmin";
import AddOrders from "./components/Dashboard/AddOrders/AddOrders";
import AddReview from "./components/Dashboard/AddReview/AddReview";
import AddService from "./components/Dashboard/AddService/AddService";
import ManageServices from "./components/Dashboard/AddService/ManageServices/ManageServices";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import OrderHistory from "./components/Dashboard/OrderHistory/OrderHistory";
import About from "./components/Home/About/About";
import CustomerReview from "./components/Home/CustomerReview/CustomerReview";
import Header from "./components/Home/Header/Header";
import Home from "./components/Home/Home/Home";
import Services from "./components/Home/Services/Services";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Footer from "./components/Shared/Footer/Footer";

export const OrderContext = createContext([[], () => { }]);
export const UserContext = createContext();

function App() {

  const [orders, setOrders] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <OrderContext.Provider value={[orders, setOrders]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/addAdmin">
              <AddAdmin></AddAdmin>
            </PrivateRoute>
            <PrivateRoute path="/manage-services">
              <ManageServices></ManageServices>
            </PrivateRoute>
            <PrivateRoute path="/addOrders">
              <AddOrders></AddOrders>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/orderHistory">
              <OrderHistory></OrderHistory>
            </PrivateRoute>
            <PrivateRoute path="/addReview">
              <AddReview></AddReview>
            </PrivateRoute>
          </Switch>
        </Router>
      </OrderContext.Provider>
    </UserContext.Provider>
  );
}

export default App;

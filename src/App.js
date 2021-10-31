import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import AuthProvider from "./context/AuthProvider";
import Register from "./components/Register/Register";
import Services from "./components/Services/Services";
import Service from "./components/Service/Service";
import AddService from "./components/AddService/AddService";
import ManageOrders from "./components/ManageOrders/ManageOrders";
import MyOrders from "./components/MyOrders/MyOrders";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/services">
              <Services />
            </Route>
            <Route path="/gallery">
              <Gallery></Gallery>
            </Route>

            <PrivateRoute path="/service/:serviceId">
              <Service />
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>

            <PrivateRoute path="/myOrders">
              <MyOrders />
            </PrivateRoute>

            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

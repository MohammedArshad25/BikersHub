
import React from 'react';
import { HashRouter as Router , Route, NavLink } from 'react-router-dom';
import SignUpForm from "./pages /SignUpForm";
import SignInForm from "./pages /SignInForm";
import Home from "./pages /home2";
import MainArea from './pages /MainArea';
import Checkout from "./pages /Checkout";
import MyBookings from "./pages /MyBookings";
import MyBookings1 from "./pages /MyBookings1";
import Header from "./components/Header";
import Footer from "./components/Footer";
class App extends React.Component{
    render(){
        return(
                <Router basename="/bike-rentals">
                    <div>
                        <Header />
                        <Route exact path="/" component={SignUpForm}></Route>
                        <Route path="/sign-in" component={SignInForm}></Route>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/mainArea" component={MainArea}></Route>
                        <Route path="/checkout" component={Checkout}></Route>
                        <Route path="/MyBookings" component={MyBookings}></Route>
                        <Route path="/MyBookings1" component={MyBookings1}></Route>
                        <Footer />
                    </div>
                </Router>
            )
    }
   
}
export default App;
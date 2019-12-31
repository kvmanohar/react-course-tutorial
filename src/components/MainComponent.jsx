import React from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
// import Dishdetails from './DishdetailComponent'
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

const Main = () => {

    const HomePage = () => {
        return (
            <Home />
        )
    }

    return (
        <div>
            <Header />
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={() => <Menu dishes={DISHES} />} />
                <Route exact path="/contactus" component={Contact} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </div>
    );
}

export default Main;

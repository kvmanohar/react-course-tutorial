import React, { useState } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import Dishdetails from './DishdetailComponent'
import { DISHES } from '../shared/dishes';

const Main = () => {

    const [selectedDishId, setSelectecDishId] = useState("");

    const onDishSelect = (dishId) => {
        setSelectecDishId(dishId)
    }

    return (
        <div>
            <Header />
            <Menu dishes={DISHES} onClick={(dishId) => onDishSelect(dishId)} />
            <Dishdetails dish={DISHES.filter((dish) => dish.id === selectedDishId)[0]} />
            <Footer />
        </div>
    );
}

export default Main;

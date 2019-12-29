import React, { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
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
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Restaurant React App </NavbarBrand>
                </div>
            </Navbar>
            <Menu dishes={DISHES} onClick={(dishId) => onDishSelect(dishId)} />
            <Dishdetails dish={DISHES.filter((dish) => dish.id === selectedDishId)[0]} />
        </div>
    );
}

export default Main;

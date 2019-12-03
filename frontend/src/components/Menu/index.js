import React from 'react';
import { NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul className='main-menu'>
                <NavItem>
                    <NavLink exact to='/' activeClassName='active'>Домой</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to='/catalog' activeClassName='active'>Каталог</NavLink>
                </NavItem>
            </ul>
        </div>
    )
}

export default Menu;
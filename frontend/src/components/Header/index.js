import React from 'react';
import { NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-main'>
            <div className='header-logo'>
                Логотип
            </div>
            <div className='header-title'>
                Заголовок
            </div>
            <div className='header-signin'>
                <NavItem>
                    <NavLink to='/signin' activeClassName='active'>Войти</NavLink>
                </NavItem>
            </div>
        </div>
    )
}

export default Header;
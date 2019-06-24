import React from 'react';
import './styles.scss';

function Header() {
    return (
        <header className="page__header">
            <div className="header__circle">
                <div className="header__circle-inside"></div>
            </div>
            <div className="circle-small__container">
                <div className="circle-small red"></div>
                <div className="circle-small yellow"></div>
                <div className="circle-small green"></div>
            </div>
            <h1 className="header__title">Pokedex</h1>
        </header>
    )
}

export default Header;
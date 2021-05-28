import React from "react"
import "./index.css"
import {Link} from "react-router-dom"

const Nav = (props) => {
    return (
        <nav className = 'navBar'>
            <ul>
                <div className="nav-item-cont">
                    <Link
                        to="/home"
                    >
                        <i className="fas fa-home fa-2x"></i>
                        <li>Home</li>
                    </Link>
                </div>
                <div className="nav-item-cont">
                    <Link
                        to="/wallet"
                    >
                        <i className="fas fa-wallet fa-2x"></i>
                        <li>Wallet</li>
                    </Link>
                </div>
                <div className="nav-item-cont">
                    <Link
                        to="/exchange"
                    >
                        <div className="plus-cont">
                            <li>+</li>
                        </div>
                    </Link>
                </div>
                <div className="nav-item-cont">
                    <Link
                        to="/transactions"
                    >
                        <i className="fas fa-bars fa-2x"></i>
                        <li>Transactions</li>
                    </Link>
                </div>
                <div className="nav-item-cont">
                    <Link
                        to="/coins"
                    >
                        <i className="fas fa-coins fa-2x"></i>
                        <li>Coins</li>
                    </Link>
                </div>
            </ul>
        </nav>
    )
}

export default Nav
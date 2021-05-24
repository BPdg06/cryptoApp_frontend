import React from "react"
import "./index.css"
import {Link} from "react-router-dom"

const Nav = (props) => {
    return (
        <nav>
            <ul>
                <div className="nav-item-cont">
                    <Link
                        to="/home"
                    >
                        <i class="fas fa-home fa-2x"></i>
                        <li>Home</li>
                    </Link>
                </div>
                <div className="nav-item-cont">
                    <Link
                        to="/wallet"
                    >
                        <i class="fas fa-wallet fa-2x"></i>
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
                        <i class="fas fa-bars fa-2x"></i>
                        <li>Transactions</li>
                    </Link>
                </div>
                <div className="nav-item-cont">
                    <Link
                        to="/coins"
                    >
                        <i class="fas fa-coins fa-2x"></i>
                        <li>Coins</li>
                    </Link>
                </div>
            </ul>
        </nav>
    )
}

export default Nav
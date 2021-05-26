import React, {useState} from "react"
import {Button} from "reactstrap"
import {Link, Route, Switch} from "react-router-dom"
import CoinsCoin from "./CoinsCoin"

const Coins = (props) => {
    ///////////////////////
    // Constants
    ///////////////////////

    const [selectedCoin, setSelectedCoin] = useState("")

    ///////////////////////
    // functions
    ///////////////////////

    const handleSelect = (coin) => {
        setSelectedCoin(coin)
    }

    ///////////////////////
    // Render
    ///////////////////////

    const loaded = () => {
        const coins = props.coins.map((item, index) => {
            return (
                <Link
                    to={`/coins/${item.symbol.toUpperCase()}`}
                    key={index}
                >
                    <div 
                        key={index}
                        className="wallet-widget-cont"
                        onClick={() => handleSelect(item.symbol)}
                    >
                        <div className="img-name-cont">
                            <div className="img-cont">
                                <img 
                                    src={item.image} 
                                    alt={`${item.name} logo`}
                                    className="coin-logo"
                                />
                            </div>
                            <div className="coin-name">
                                <h4>{item.name}</h4>
                            </div>
                        </div>
                        <div className="coin-price">
                            <h4>{item.currentPrice}</h4>
                        </div>
                    </div>
                </Link>
            )
        })

        return (
            <>
                <Switch>
                    <Route
                        path="/coins/:symbol"
                    >
                        <CoinsCoin
                            coins={props.coins}
                            selectedCoin={selectedCoin}
                            transactions={props.transactions}
                        />
                    </Route>
                    <Route
                        path="/coins"
                    >
                    <h2>Coins</h2>
                        {coins}
                        <Link
                            to="/exchange"
                        >
                            <Button>Purchase Coins</Button>
                        </Link>
                    </Route>

                </Switch>
            </>
        )
    }

    const loading = () => {
        return (
            <h2>Loading...</h2>
        )
    }

    return props.coins.length > 0 ? loaded() : loading()
}


export default Coins
import React, {useState} from "react"
import {Button} from "reactstrap"
import {Link, Route, Switch} from "react-router-dom"
import dollar from "../assets/pngfind.com-bling-png-2896086.png"
import WalletCoin from "./WalletCoin"


const Wallet = (props) => {

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
        const coins = props.wallet.coins.map((item, index) => {
            let coinData = props.coins
            coinData.push({
                id: "US Dollar",
                symbol: "USD",
                image: dollar,
            })
            coinData = coinData.find((coinItem, coinIndex) => {
                return (
                        item.coin.toLowerCase() === coinItem.symbol.toLowerCase()
                    )
                })
            return (
                <Link
                    to={item.coin === "USD" ?  "/wallet" :`/wallet/${item.coin}`}
                    key={index}
                >
                    <div 
                        key={index}
                        className="wallet-widget-cont"
                        onClick={() => handleSelect(item.coin)}
                    >
                        <div className="img-name-cont">
                            <div className="img-cont">
                                <img 
                                    src={coinData.image} 
                                    alt={`${item.coin} logo`}
                                    className="coin-logo"
                                />
                            </div>
                            <div className="coin-name">
                                <h4>{item.coin}</h4>
                            </div>
                        </div>
                        <div className="coin-price">
                            <h4>{item.amount}</h4>
                            {item.coin !== "USD" && <p>= ${item.amount * coinData.current_price}</p>}
                        </div>
                    </div>
                </Link>
            )
        })

        return (
            <>
                <Switch>
                    <Route
                        path="/wallet/:symbol"
                    >
                        <WalletCoin
                            wallet={props.wallet}
                            coins={props.coins}
                            selectedCoin={selectedCoin}
                            transactions={props.transactions}
                        />
                    </Route>
                    <Route
                        path="/wallet"
                    >
                    <h2>Wallet</h2>
                        {coins}
                        <Link
                            to="/exchange"
                        >
                            <Button>Add Wallet</Button>
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

    return (props.coins.length > 0 && props.wallet.name !== "") ? loaded() : loading()
}

export default Wallet
import React from "react"

const CoinsCoin = (props) => {

    ///////////////////////
    // Constants
    ///////////////////////

    const selectedCoin = props.selectedCoin
    const coinData = props.coins

    const coin = coinData.find((item, index) => {
        return (
            item.symbol.toLowerCase() === selectedCoin.toLowerCase()
        )
    })

    ///////////////////////
    // Functions
    ///////////////////////



    ///////////////////////
    // Render
    ///////////////////////

    return (
        <>
            <h3>{coin.name}</h3>
            <div className="wallet-coin-price-cont coin-data">
                <p>Price of {coin.name}:</p>
                <h6>${coin.current_price}</h6>
            </div>
            <div className="wallet-coin-amount-cont coin-data">
                <p>% Change (24 hours)</p>
                <h6>{coin.price_change_percentage_24h}%</h6>
            </div>
            <div className="wallet-coin-amount-cont coin-data">
                <p>24 Hour High:</p>
                <h6>${coin.high_24h}</h6>
            </div>
            <div className="wallet-coin-amount-cont coin-data">
                <p>24 Hour Low:</p>
                <h6>${coin.low_24h}</h6>
            </div>
            <img src="https://placeimg.com/300/300/any" alt="placeholder"/>

        </>
    )
}

export default CoinsCoin
import React from "react"
import "./index.css"


const CoinChart = (props) => {

    ///////////////////////
    // Constants
    ///////////////////////

    ///////////////////////
    // Functions
    ///////////////////////

    const loaded = () => {
        const coinArray = props.coins.slice(0,4)
        const coins = coinArray.map((item, index) => {
            return (
                <div 
                    key={index}
                    className="coin-chart-cont"
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
                            <p>{item.price_change_percentage_24h}</p>
                        </div>
                    </div>
                    <div className="coin-price">
                        <h4>${item.current_price}</h4>
                    </div>
                </div>
            )
        })

        ///////////////////////
        // Render
        ///////////////////////

        return (
            <div className="coin-chart">
                {coins}
            </div>
        )
    }

    const loading = () => {
        return (
            <h2>Loading...</h2>
        )
    }

    return (props.coins.length > 0 && props.wallet.name !== "") ? loaded() : loading()
}

export default CoinChart
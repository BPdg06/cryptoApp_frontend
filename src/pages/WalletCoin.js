import React from "react"

const WalletCoin = (props) => {

    ///////////////////////
    // Constants
    ///////////////////////

    const selectedCoin = props.selectedCoin
    const walletData = props.wallet
    const coinData = props.coins
    const transactionData = props.transactions

    const wallet = walletData.coins.find((item, index) => {
        return (
            item.coin.toLowerCase() === selectedCoin.toLowerCase()
        )
    })
    const coin = coinData.find((item, index) => {
        return (
            item.symbol.toLowerCase() === selectedCoin.toLowerCase()
        )
    })
    const transactions = transactionData.filter((item, index) => {
        return (
            item.coinSold.toLowerCase() === selectedCoin.toLowerCase() || item.coinBought.toLowerCase() === selectedCoin.toLowerCase()
        )
    })

    ///////////////////////
    // Functions
    ///////////////////////

    const transactionDisplay = transactions.map((item, index) => {
        return (
            <>
                <div className="transaction-display">
                    <h6>Bought: {item.boughtAmount} {item.coinBought}</h6>
                    <h6>Sold: {item.soldAmount} {item.coinSold}</h6>
                </div>
            </>
        )
    })

    ///////////////////////
    // Render
    ///////////////////////

    return (
        <>
            <h3>{coin.name}</h3>
            <div className="wallet-coin-price-cont coin-data">
                <p>{coin.name} owned:</p>
                <h6>{wallet.amount} {coin.symbol.toUpperCase()}</h6>
            </div>
            <div className="wallet-coin-amount-cont coin-data">
                <p>Amount in USD:</p>
                <h6>= ${wallet.amount * coin.current_price}</h6>
            </div>
            <div className="wallet-coin-amount-cont coin-data">
                <p>Price of {coin.name}:</p>
                <h6>Hide</h6>
            </div>
            <img src="https://placeimg.com/300/300/any"/>
            <h4>Transactions</h4>
            {transactionDisplay}
        </>
    )
}

export default WalletCoin
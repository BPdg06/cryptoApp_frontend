import React from "react"
import { useState, useEffect } from "react";
import Plotly from "plotly.js/dist/plotly";

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

    useEffect(() => { 
        getCoindata().then((graphData) => {
        initialChart(graphData);
        // setCoinPrice(parseFloat(graphData.price[graphData.price.length-1]).toFixed(2));
          });
      }, []);

    const apiCall = async(url) => {
        let response = await fetch(url, {
          content: {
            success: "appication/json"
          },
        });
          if (!response.ok) {
            let msg = "Can't display the chart";
            console.log(msg);
          }
          return response.json();
      };
    
    
    
      const getCoindata = async() => {
            
        const response = await apiCall(`https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=1&interval=1m`)
        
        const data = {index: [], price: [], volume: []};
        for (const item of response.prices) {
          data.index.push(item[0]);
          data.price.push(item[1]);
        }
        for (const item of response.total_volumes) {
          data.volume.push(item[1]);
        }
    
        return data;
        
      };
    
      
      useEffect(() => {getCoindata()}, [])


    const initialChart = (data) => {
		const priceChart = {
			name: "Price($)",
			x: data.index.map((time) => new Date(time)),
      y: data.price,
      type: "scatter",
			xaxis: "x",
			yaxis: "y1",
			mode: "lines+markers",
			marker: { 
        color: "rgb(12, 253, 1)", 
        size: 5 
      },
      line: {
        color: "rgb(12, 253, 1)",
        width: 2
      }
    };
    
		const volumeChart = {
			name: "Vol($Billion)",
			x: data.index.map((time) => new Date(time)),
      y: data.volume,
      type: "scatter",
      xaxis: "x",
      yaxis: "y2",
			marker: {
				color: "rgb(17, 91, 233)"
      },
    };
		let layout = {
      title: "Live Chart",
			height: "100%",
      autosize: true,
			xaxis: {
				domain: [1, 1],
				anchor: "y2",
			},
			yaxis: {
				domain: [0.1, 1],
				anchor: "x",
			},
			yaxis2: {
				showticklabels: false,
				domain: [0, 0.1],
				anchor: "x",
			},
		};
    var allChart = [priceChart, volumeChart];
    var config = {responsive: true}
		Plotly.react("cryptoChart", allChart, layout, config);
	};


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
            <div id="cryptoChart"></div>
            <h4>Transactions</h4>
            {transactionDisplay}
        </>
    )
}

export default WalletCoin


  
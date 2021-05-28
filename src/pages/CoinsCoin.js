import React from "react";
import { useState, useEffect } from "react";
import Plotly from "plotly.js/dist/plotly";
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

    useEffect(() => { 
        getCoindata()
        .then((graphData) => {
            totalChart(graphData);
        });
    }, []);

    const apiCall = async(url) => {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    };
    
    
    const getCoindata = async() => {
            
        const response = await apiCall(`https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=1&interval=1m`)
        
        const data = {price:[], volume:[], time:[]};
        for (const item of response.prices) {
          data.time.push(item[0]);
          data.price.push(item[1]);
        }
        for (const item of response.total_volumes) {
          data.volume.push(item[1]);
        }
    
        return data;
    };
    
      
    useEffect(() => {getCoindata()}, [])


    const totalChart = (data) => {
		const priceChart = {
			name: "Price($)",
            x: data.time.map((time)=> new Date(time)),
            y: data.price,
            type: "scatter",
            mode: "lines",
			xaxis: "x",
            yaxis: "y1",
            line: {
            color: "rgb(12, 253, 1)",
            width: 3
            },
        };
    
		const volumeChart = {
			name: "Vol($Billion)",
			x: data.time.map((time) => new Date(time)),
            y: data.volume,
            type: "scatter",
            mode: "lines",
            xaxis: "x",
            yaxis: "y2",
            line: {
                width: 3,
                color: "rgb(252, 15, 192)"
            },
        };
		let layout = {
            title: {
                text: 'Live Chart',
                font: {
                    family: 'Arial',
                    size: 36,
                    color: 'rgb(51, 51, 255)',
                }
            },
            height: "100%",
            autosize: true,
            
			xaxis: {
                title: 'Time',
                titlefont: {
                    family: 'Arial',
                    font: 'bold',
                    size: 24,
                    color: 'rgb(102, 0, 204)'
                },
                // autotick: true,
                tickfont: { 
                    color: 'rgb(0, 0, 0)',
                    family: 'Arial',
                    size: 20
                },
                tickangle: 'auto',
                ticks: 'outside',
                tickwidth: 5,
                ticklen: 8,
                tickcolor: 'rgb(0, 255, 255)',
                showticklabels: true,
                automargin: true,
				anchor: "y2",
			},
			yaxis: {
                title: 'Price',
                titlefont: {
                    family: 'Arial',
                    font: 'bold',
                    size: 24,
                    color: 'rgb(102, 0, 204)'
                },
                // autotick: true,
                tickfont: { 
                    color: 'rgb(0, 0, 0)',
                    family: 'Arial',
                    size: 20
                },
                tickangle: 'auto',
                ticks: 'outside',
                tickwidth: 5,
                ticklen: 8,
                tickcolor: 'rgb(0, 255, 255)',
                showticklabels: true,
                
				domain: [0.2, 1],
                anchor: "x",
                automargin: true,
			},
			yaxis2: {
				showticklabels: false,
				domain: [0, 0.2],
				anchor: "x",
            },
            paper_bgcolor: 'rgba(0, 0, 0, 0.3)',
            plot_bgcolor: 'rgb(64, 64, 64)'
		};
    var allChart = [priceChart, volumeChart];
    var config = {responsive: true}
	Plotly.react("cryptoChart", allChart, layout, config);
	};

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
            <div id="cryptoChart"></div>
        </>
    )
}
export default CoinsCoin
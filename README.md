# Project Overview

## Project Links
- [UX/UI COMP](https://www.behance.net/gallery/119211101/UIUX-Design-Cryptocurrency-payment-application?tracking_source=search_projects_recommended%7Cux%20case%20study)

- [API URL with key](https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=c5d6dda1-a1ed-43ac-9a0c-6f4d7e6227a6)

- [CoinGecko API](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum&order=market_cap_desc&per_page=100&page=1&sparkline=false)

- [ Frontend github repo link](https://github.com/BPdg06/cryptoApp_frontend/tree/dev)
- [Frontend deployment link](https://mystifying-villani-51e1b2.netlify.app/)

- [ Backend github repo link](https://github.com/taylorhughes291/crypto-backend/tree/dev)
- [ Backend deployment link](https://crypto-backend-project3.herokuapp.com/)

## Project Description

Developing a paper trading Crypto Currency Trading App for those who wish they had money to put into crypto but dont. 

## API

From the returned data we will be able to see the some of the data depending on the endpoints. Such as :


```
 "data": [
    {
      "id": 1,
      "name": "Bitcoin",
      "symbol": "BTC",
      "slug": "bitcoin",
      "rank": 1,
      "is_active": 1,
      "first_historical_data": "2013-04-28T18:47:21.000Z",
      "last_historical_data": "2021-05-21T01:19:03.000Z",
      "platform": null
    },
         
```

CoinGecko API Data
```
[
  {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    "current_price": 36482,
    "market_cap": 691576098773,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 776067697689,
    "total_volume": 76318315268,
    "high_24h": 42252,
    "low_24h": 36745,
    "price_change_24h": -3821.2094276,
    "price_change_percentage_24h": -9.48112,
    "market_cap_change_24h": -85873174689.86401,
    "market_cap_change_percentage_24h": -11.0455,
    "circulating_supply": 18713700,
    "total_supply": 21000000,
    "max_supply": 21000000,
    "ath": 64805,
    "ath_change_percentage": -42.9739,
    "ath_date": "2021-04-14T11:54:46.763Z",
    "atl": 67.81,
    "atl_change_percentage": 54399.55707,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2021-05-21T16:05:13.327Z"
  },
  {
    "id": "ethereum",
    "symbol": "eth",
    "name": "Ethereum",
    "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    "current_price": 2419.36,
    "market_cap": 280597385303,
    "market_cap_rank": 2,
    "fully_diluted_valuation": null,
    "total_volume": 80980751864,
    "high_24h": 2927.74,
    "low_24h": 2378.73,
    "price_change_24h": -388.54962695,
    "price_change_percentage_24h": -13.83766,
    "market_cap_change_24h": -57364547311.75836,
    "market_cap_change_percentage_24h": -16.97367,
    "circulating_supply": 115966407.624,
    "total_supply": null,
    "max_supply": null,
    "ath": 4356.99,
    "ath_change_percentage": -44.46522,
    "ath_date": "2021-05-12T14:41:48.623Z",
    "atl": 0.432979,
    "atl_change_percentage": 558736.78441,
    "atl_date": "2015-10-20T00:00:00.000Z",
    "roi": {
      "times": 87.01852095983482,
      "currency": "btc",
      "percentage": 8701.85209598348
    },
    "last_updated": "2021-05-21T16:07:06.947Z"
  }
]
```


## Wireframes/ UX DESIGN COMP
(https://www.behance.net/gallery/119211101/UIUX-Design-Cryptocurrency-payment-application?tracking_source=search_projects_recommended%7Cux%20case%20study)




### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Wallet - displays portfolio balance, crypto balance.
- Charts - displays 1h, 24h, 1wk, 1mo, 1yr
- Form - Login, search 



#### PostMVP EXAMPLE

- JWT

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav in tablet and desktop media queries| 
| Footer | This will render the header include the nav for mobile only | 
| Cards | This is where the relevant crytpo will be displayed.| 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Working with API | H | 5hrs| hrs | hrs |
| Working with Nav | H | 5hrs| hrs | hrs |
| Styling | H | 5hrs | hrs | hrs |
| Bulding Base App structure| H | 5hrs | hrs | hrs |
| PostMVP Stuff| L | 4hrs | hrs | hrs |
| Project Planning | H | hrs | hrs | hrs- |
| Backend | H | 3hrs | .5hrs | hrs |
| Total | H | 38hrs| hrs | hrs |

## Additional Libraries
Reactstrap
As of now. may grow or change at the flow of the project.

## Code Snippet

This code snippet dynamically generates 3 cards. Im proud of it because I was able to make it work.

```
const mongoose = require 'mongoose'
```

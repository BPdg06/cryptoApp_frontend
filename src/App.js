import './App.css';
import {useState} from "react"
import {Switch, Route} from "react-router-dom"
import Login from "./pages/Login"
import CreateAccount from "./pages/CreateAccount"
import Home from "./pages/Home"
import Wallet from "./pages/Wallet"
import Coins from "./pages/Coins"
import Transactions from "./pages/Transactions"
import Exchange from "./pages/Exchange"
import Nav from "./components/Nav"
import {withRouter, Redirect} from 'react-router-dom'



function App (props) {

  ///////////////////////////////
  // Constants
  ///////////////////////////////

  const url = process.env.REACT_APP_BACKENDURL
  const [user, setUser] = useState("")
  const [wallet, setWallet] = useState({
    name: "",
    password: "",
    username: "",
    coins: [{
          coin: "",
          amount: ""
    }],
    transactions: []
  })
  const [transactions, setTransactions] = useState([{
    userID: "",
    coinSold: "",
    soldAmount: 0,
    coinBought: "",
    boughtAmount: 0
  }])
  const [coins, setCoins] = useState([])

  ///////////////////////////////
  // Functions
  ///////////////////////////////
  const getLogin = (username, password) => {
    fetch(url + '/wallets/login/' + username + '/' + password)
    .then((response) => response.json())
    .then((data) => {
      setUser(data);
      if (data.status === 200)
      {
        setUser(data.data.wallet._id)
        props.history.push('/home')
      } else if (data.status === 409) {
        alert('username does not exist')
        props.history.push('/create')
      } else if (data.status === 403) {
        alert('username or password is WRONG!')
      }
      

    })
  }

  //handle create for the form
const handleCreate = (newUser) => {
  fetch(url + "/wallets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser)
  }).then((response) => response.json())
  .then((data) =>  {
    console.log(data.status)
    if(data.status === 200)
    {
    setUser(data.data._id)
    props.history.push('/home')
  
  } else if (data.status === 403) {
    alert('username already exists')
    props.history.push('/login')
  }

  })
};
  const getDbData = () => {
    const url = process.env.REACT_APP_BACKENDURL
    const getUrl = url + "/wallets/" + user
    fetch(getUrl)
    .then((response) => (response.json()))
    .then((data) => {
      setWallet(data.data.wallet)
      setTransactions(data.data.transactions)
    })
  }

  const getApiData = () => {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    fetch(url)
    .then((response) => (response.json()))
    .then((data) => {
      setCoins(data)
    })
  }

  ///////////////////////////////
  // Render
  ///////////////////////////////

  return (
    <div className="App">
      <Switch>
        <Route
          exact path="/"
        >
          <Redirect to="/login" />
        </Route>
        <Route
          path="/login"
        >
          <Login 
            setUser={setUser}
            getLogin={getLogin}
          />
        </Route>
        <Route
          path="/create"
        >
          <CreateAccount 
            setUser={setUser}
            handleCreate={handleCreate}
          />
        </Route>
        <Route
          path="/home"
        >
          <Home 
            wallet={wallet}
            coins={coins}
            getDbData={getDbData}
            getApiData={getApiData}
          />
        </Route>
        <Route
          path="/wallet"
        >
          <Wallet 
            wallet={wallet}
            coins={coins}
            transactions={transactions}
          />
        </Route>
        <Route
          path="/coins"
        >
          <Coins 
            coins={coins}
          />
        </Route>
        <Route
          path="/transactions"
        >
          <Transactions 
            transactions={transactions}
          />
        </Route>
        <Route
          path="/exchange"
        >
          <Exchange 
            coins={coins}
            wallet={wallet}
            user={user}
            url={url}
          />
        </Route>
      </Switch>
        <div className={props.location.pathname === "/login" || props.location.pathname === "/create" ? "hidden" : ""}>
          <Nav 
          />
        </div>
    </div>
  );
}

export default withRouter(App);

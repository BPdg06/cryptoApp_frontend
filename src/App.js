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

function App() {

  ///////////////////////////////
  // Constants
  ///////////////////////////////
  const url = (`https://${process.env.REACT_APP_BACKENDURL}.herokuapp.com`)
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
  const getLogin = () => {
    fetch(url + '/wallets/login/:username/:password')
    .then((response) => response.json())
    .then((data) => {
      setUser(data);
    })
  }

  //handle create for the form
const handleCreate = (newUser) => {
  fetch(url + "/wallets/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      name: String,
      username: String,
      password: String
   }
  }).then(() => getLogin());
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
      {/* <button>
        Login
      </button>
      <button>
        Sign up
      </button> */}
      <Switch>
        <Route
          exact path="/"
        >
          <h2> This is the app page</h2>
        </Route>
        <Route
          path="/login"
        >
          <Login 
            setUser={setUser}
          />
        </Route>
        <Route
          path="/create"
        >
          <CreateAccount 
            setUser={setUser}
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
          />
        </Route>
      </Switch>
        <Nav />
    </div>
  );
}

export default App;

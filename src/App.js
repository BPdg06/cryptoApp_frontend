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

function App() {

  ///////////////////////////////
  // Constants
  ///////////////////////////////

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
  const [transactions, setTransactions] = useState({
    userID: "",
    coinSold: "",
    soldAmount: 0,
    coinBought: "",
    boughtAmount: 0
  })

  ///////////////////////////////
  // Functions
  ///////////////////////////////

  ///////////////////////////////
  // Render
  ///////////////////////////////

  return (
    <div className="App">
      <button>
        Login
      </button>
      <button>
        Sign up
      </button>
      <Switch>
        <Route
          exact path="/"
        >
          <h2> This is the app page</h2>
        </Route>
        <Route
          path="/login"
        >
          <Login />
        </Route>
        <Route
          path="/create"
        >
          <CreateAccount />
        </Route>
        <Route
          path="/home"
        >
          <Home />
        </Route>
        <Route
          path="/wallet"
        >
          <Wallet />
        </Route>
        <Route
          path="/coins"
        >
          <Coins />
        </Route>
        <Route
          path="/transactions"
        >
          <Transactions />
        </Route>
        <Route
          path="/exchange"
        >
          <Exchange />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

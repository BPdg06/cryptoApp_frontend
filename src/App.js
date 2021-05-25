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
  const [coins, setCoins] = useState([])

  ///////////////////////////////
  // Functions
  ///////////////////////////////

  const getDbData = () => {
    const REACT_APP_BACKENDURL = process.env
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
      <footer>
        <Nav />
      </footer>

    </div>
  );
}

export default App;

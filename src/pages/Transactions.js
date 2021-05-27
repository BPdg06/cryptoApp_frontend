import React from "react"

const Transactions = (props) => {
        
    //////////////////////////
    // Constants
    //////////////////////////
    
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //////////////////////////
    // Functions
    //////////////////////////
    
    function convertDate (date) {
        const month = monthNames[date.getMonth()]
        const day = date.getDate()
        const year = date.getFullYear()
        const newDate = `${day} ${month}, ${year}`
        return newDate
    }

    let dateArray = []
    const d1 = new Date()
    const today = convertDate(d1)
    const d2 = new Date()
    let yesterday = convertDate(new Date(d2.setDate(d2.getDate() - 1)))
    const transDates = props.transactions.map((item, index) => {
        const date = new Date(String(item.createdAt))
        let newDate = convertDate(date)
        if (newDate === today) {
            newDate = "Today"
        } else if (newDate === yesterday) {
            newDate = "Yesterday"
        }
        dateArray.unshift(newDate)
        return ({
            date: newDate,
            data: item,
        })
    })

    dateArray = [... new Set(dateArray)]

    let transDisplay = dateArray.map((item, index) => {
        const arr = []
        for (let i=0; i < transDates.length; i += 1) {
            if (transDates[i].date === item) {
                arr.unshift(transDates[i].data)
            }
        }
        return ({
            date: item,
            data: arr
        })
    })

    console.log(transDisplay)
    transDisplay = transDisplay.map((item, index) => {
        const transactions = item.data.map((item2, index) => {
            return(
                <div className="transaction-display">
                    <h6>Exchange {item2.coinSold}/{item2.coinBought}</h6>
                    <p>+{item2.boughtAmount}</p>
                </div>
            )
        })
        return (
            <div className="transaction-date-cont">
                <h3>{item.date}</h3>
                {transactions}
            </div>
        )
    })

    //////////////////////////
    // Render
    //////////////////////////

    return (
        <div className="transactions-cont">
            <h2>Transactions</h2>
            {transDisplay}
        </div>
    )
}

export default Transactions
import React from "react"

const Transactions = (props) => {
        
    //////////////////////////
    // Constants
    //////////////////////////
    
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //////////////////////////
    // Functions
    //////////////////////////
    
    let dateArray = []
    const transDates = props.transactions.map((item, index) => {
        const today = new Date()
        const date = new Date(String(item.createdAt))
        const month = monthNames[date.getMonth()]
        const day = date.getDate()
        const year = date.getFullYear()
        const newDate = `${day} ${month}, ${year}`
        dateArray.push(newDate)
        return ({
            date: newDate,
            data: item,
        })
    })

    dateArray = [... new Set(dateArray)]

    console.log(transDates, dateArray)

    //////////////////////////
    // Render
    //////////////////////////

    return (
        <h2>This is the Transactions page.</h2>
    )
}

export default Transactions
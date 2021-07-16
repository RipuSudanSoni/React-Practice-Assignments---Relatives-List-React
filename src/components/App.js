import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
        const arr = ["Ripu", "Nipu", "Prince", "Bala ji"];
        let name = arr.map((item, index) => {
            return <li key = {index}> {index} {item} </li>
        })

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <ol>
                   {name}
               </ol>
            </div>
        )
    }
}


export default App;

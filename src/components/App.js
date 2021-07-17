//import React, {Component, useState} from "react";
import React from "react";
import '../styles/App.css';

// class App extends Component {
//     render() {
//         const arr = ["Ripu", "Nipu", "Prince", "Bala ji"];
//         let name = arr.map((item, index) => {
//             return <li key = {index}> {index} {item} </li>
//         },1)

//         return(
//             <div id="main">
//                {/* Do not remove the main div */}
//                <ol>
//                    {name}
//                </ol>
//             </div>
//         )
//     }
// }
 function App() {

    const arr = ["Ripu", "Nipu", "Prince", "Bala ji","Chhotu"];

        let count = 0;

        let name = arr.map((item) => {
            ++count;
            let keyvalue = `relativeListItem${count}`;
             return <li key ={keyvalue}> {item} </li>
         })
         console.log(name);
         //console.log(keyvalue);
         //console.log(`${str}` + `${index+ 1}`);

    return (
        <>
            <ol key = "relativeList">
                {name}
            </ol>
        </>
    )
 }

export default App;

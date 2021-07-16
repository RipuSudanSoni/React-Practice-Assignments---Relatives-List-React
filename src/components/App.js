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
     let str = "relativeListItem";

    const arr = ["Ripu", "Nipu", "Prince", "Bala ji","Chhotu"];
        let name = arr.map((item, index) => {
             return <li key ={`${str}` + `${index+ 1}`}> {item} </li>
         })
         console.log({name});
         console.log(typeof(name));
         console.log(`${str}` + `${index+ 1}`);

    return (
        <>
            <ol key = "relativeOrderList">
                {name}
            </ol>
        </>
    )
 }

export default App;

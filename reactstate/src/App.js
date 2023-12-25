import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Actuer from "./component/Actuer";

import "./App.css";

 export default class App extends React.Component {
   state = {
     Acteur: {
       fullName: "Selena Gomez",
       bio: "Grand Prairie, au Texas, est une chanteuse, actrice et productrice américaine.",
       imgSrc:
         "https://hips.hearstapps.com/cosmouk.cdnds.net/17/03/1484550832-selena-gomez-at-the-2016-amas.jpg?crop=0.670xw:1.00xh;0.133xw,0&resize=1200:*",
       profession: "Chanteuse",
     },
     shows: false,
   };
   toggleShow = () => {
     this.setState((prevState) => ({
       shows: !prevState.shows,
     }));
   };
   render() {
     return (
       <div className="App">
         {this.state.shows && <Actuer Acteur={this.state.Acteur} />}
         <div className="btn">
           <button onClick={this.toggleShow}>toggle me!</button>
         </div>
       </div>
     );
   }
 }

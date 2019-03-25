import React, { Component } from 'react';
import './App.css';
import PassagensPromo from './data/PassagensPromo-data.json'
import Viajanet from './data/Viajanet-data.json'
import Milhas from './data/123Milhas-data.json'
import Voopter from './data/Voopter-data.json'

class Comparator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(){
    return(
      <div>
        
        <div style={{display: "flex"}}>
        
          <div style={{fontSize: "9px", fontWeight: "lighter", textAlign: "left", marginRight: "100px"}}>
            <h2 style={{fontWeight: "lighter"}}><b>Site:</b> {PassagensPromo.Site}</h2>
            <h2 style={{fontWeight: "lighter"}}><b>DepartureDate:</b> {PassagensPromo.DepartureDate}</h2>
            <h2 style={{fontWeight: "lighter"}}><b>ReturnDate:</b> {PassagensPromo.ReturnDate}</h2>
            <h2 style={{fontWeight: "lighter"}}><b>Price:</b> {PassagensPromo.Price}</h2>
            <h2 style={{fontWeight: "lighter"}}><b>LastUpdate:</b> {PassagensPromo.LastUpdate}</h2>
            <button><a style={{textDecoration: "none", color: "black"}} href={PassagensPromo.Url}>Comprar</a></button>
          </div>

          <div style={{fontSize: "9px", fontWeight: "lighter", textAlign: "left"}}>
            <h2 style={{fontWeight: "lighter"}}><b>Site:</b> {Viajanet.Site}</h2>
            <h2 style={{fontWeight: "lighter"}}><b>DepartureDate:</b> {Viajanet.DepartureDate}</h2>
            <h2 style={{fontWeight: "lighter"}}><b>ReturnDate:</b> {Viajanet.ReturnDate}</h2>
            <h2 style={{fontWeight: "lighter"}}><b>Price:</b> {Viajanet.Price}</h2>
            <h2 style={{fontWeight: "lighter"}}><b>LastUpdate:</b> {Viajanet.LastUpdate}</h2>
            <button><a style={{textDecoration: "none", color: "black"}} href={Viajanet.Url}>Comprar</a></button>
          </div>

        </div>

        <div style={{display: "flex", marginTop: "100px"}}>

          <div style={{fontSize: "9px", fontWeight: "lighter", textAlign: "left", marginRight: "100px"}}>
            <h2 style={{fontWeight: "lighter"}}><b>Site:</b> {Milhas.Site}</h2>
            <h2 style={{fontWeight: "lighter"}}><b>DepartureDate:</b> {Milhas.DepartureDate}</h2>
            <h2 style={{fontWeight: "lighter"}}><b>ReturnDate:</b> {Milhas.ReturnDate}</h2>
            <h2 style={{fontWeight: "lighter"}}><b>Price:</b> {Milhas.Price}</h2>
            <h2 style={{fontWeight: "lighter"}}><b>LastUpdate:</b> {Milhas.LastUpdate}</h2>
            <button><a style={{textDecoration: "none", color: "black"}} href={Milhas.Url}>Comprar</a></button>
          </div>

          <div style={{fontSize: "9px", fontWeight: "lighter", textAlign: "left"}}>
            <h2 style={{fontWeight: "lighter"}}><b>Site:</b> {Voopter.Site}</h2>
            <h2 style={{fontWeight: "lighter"}}><b>DepartureDate:</b> {Voopter.DepartureDate}</h2>
            <h2 style={{fontWeight: "lighter"}}><b>ReturnDate:</b> {Voopter.ReturnDate}</h2>
            <h2 style={{fontWeight: "lighter"}}><b>Price:</b> {Voopter.Price}</h2>
            <h2 style={{fontWeight: "lighter"}}><b>LastUpdate:</b> {Voopter.LastUpdate}</h2>
            <button><a style={{textDecoration: "none", color: "black"}} href={Voopter.Url}>Comprar</a></button>
          </div>

        </div>

      </div>
    );
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Comparator />
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Chain } from "./Chain.js";

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = { change: false };
  }

  addBlock() {
    let data = document.getElementsByClassName("dataInput")[0].value;
    if (data != "") {
      this.props.blockchain.addBlock(this.props.blockchain.newBlock(data));
      this.setState({ change: true });
    }
  }

  verify() {
    console.log(
      "Is blockchain valid?",
      this.props.blockchain.isBlockChainValid()
    );
    console.log(this.props.blockchain);
    this.setState({ change: true });
  }

  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <input className="dataInput"></input>
          <button onClick={() => this.addBlock()}>Agregar bloque</button>
          <br></br>
          <button onClick={() => this.verify()}>Verificar cadena</button>
          <br></br>
          <Chain blocks={this.props.blockchain.blocks}></Chain>
        </header>
      </React.Fragment>
    );
  }
}

export { Controls };

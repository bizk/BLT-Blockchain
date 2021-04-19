import React, { Component } from "react";
import { Chain } from "./Chain.js";
import { Block } from "./Block.ts";

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
    console.log(this.props.blockchain);
  }

  addFake() {
    let data =
      "Los datos de este bloque fueron colocados manualmente en lugar de haber sido calculados por el programa.";

    this.props.blockchain.addBlock(
      new Block(
        this.props.blockchain.latestBlock().getIndex() + 1,
        Date.now(),
        "78bfa2b53cd8a0d8afa1d2a9b50cd45e383aeb6ac7808bc25448ccef8e07b0ce", //this.props.blockchain.latestBlock().getHash(),
        data
      )
    );
    this.setState({ change: true });

    console.log(this.props.blockchain);
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
        <div className="inputPanel">
          <div className="region">
            <p>Contenido del bloque:</p>
            <textarea className="dataInput"></textarea>
            <br></br>
            <button onClick={() => this.addBlock()}>Agregar bloque</button>
          </div>
          <br></br>
          <div className="region">
            <button onClick={() => this.addFake()}>
              Agregar bloque manual
            </button>
            <br></br>
            <button onClick={() => this.verify()}>Verificar cadena</button>
          </div>
        </div>
        <br></br>
        <Chain blocks={this.props.blockchain.blocks}></Chain>
      </React.Fragment>
    );
  }
}

export { Controls };

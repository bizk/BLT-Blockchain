import React, { Component } from "react";

class Chain extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blocks: props.blocks, safeguardvalid: true };
  }

  modifyField(key, field, message) {
    let newBlocks = this.state.blocks;
    console.log(newBlocks);
    console.log(key);
    console.log(field);
    newBlocks[key][field] = prompt(message);
    this.setState({ blocks: newBlocks, safeguardvalid: false });
  }

  deleteBlock(key) {
    if (window.confirm("¿Borrar bloque?")) {
      let newBlocks = this.state.blocks.filter((x) => x.index != key);
      this.setState({ blocks: newBlocks, safeguardvalid: false });
    }
  }

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.blocks.map((listitem, k) => (
            <li key={k} className="block">
              <div className="region">
                <a onClick={() => this.deleteBlock(listitem.index)}>
                  Bloque #{listitem.index} - <i>Borrar</i>
                </a>
                <br></br>
                <a
                  onClick={() => this.modifyField(k, "data", "Modificar Data")}
                >
                  <strong>Data: {listitem.data}</strong>
                </a>
                <br></br>
                <a
                  onClick={() => this.modifyField(k, "hash", "Modificar Hash")}
                >
                  Hash: {listitem.hash}
                </a>
                <br></br>
                <a
                  onClick={() =>
                    this.modifyField(
                      k,
                      "previousHash",
                      "Modificar Previous Hash"
                    )
                  }
                >
                  Previous Hash: {listitem.previousHash}
                </a>
                <br></br>
                <a
                  onClick={() =>
                    this.modifyField(k, "timestamp", "Modificar TimeStamp")
                  }
                >
                  Timestamp: {listitem.timestamp}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export { Chain };

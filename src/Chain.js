import React, { Component } from "react";

class Chain extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blocks: props.blocks };
  }

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.blocks.map((listitem, k) => (
            <li key={k} className="block">
              <div className="region">
                <p>Bloque #{listitem.index}</p>
                <p>
                  <strong>Data: {listitem.data}</strong>
                </p>
                <p>
                  Hash: {listitem.hash}
                  <br></br>Previous Hash: {listitem.previousHash}
                  <br></br>Timestamp: {listitem.timestamp}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export { Chain };

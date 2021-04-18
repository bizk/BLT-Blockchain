import React, { Component } from "react";

class Chain extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blocks: props.blocks };
  }

  render() {
    return (
      <React.Fragment>
        <ul className="list-group">
          {this.state.blocks.map((listitem, k) => (
            <li key={k} className="list-group-item list-group-item-primary">
              {listitem.data}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export { Chain };

import React, { Component } from "react";

class End extends Component {
  render() {
    return (
      <div className="table">
        <div className="win">
          {this.props.winner > 0
            ? "Победил Галлагер"
            : this.props.winner < 0
            ? "Победила Чёрная Бонни"
            : "Ничья"}
        </div>
      </div>
    );
  }
}

export default End;

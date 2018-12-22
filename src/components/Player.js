import React, { Component } from "react";

class Player extends Component {
  render() {
    return (
      <div className={this.props.player.class}>
        <div className="points">
          <div className="counter">{this.props.score}</div>
        </div>

        <div className="info">
          <div>
            <p className="name">{this.props.player.name}</p>
            <p className="active">{this.props.massage}</p>
          </div>
        </div>

        <div className="avatar">
          <img alt="аватор" src={this.props.player.avator} />
        </div>
      </div>
    );
  }
}

export default Player;

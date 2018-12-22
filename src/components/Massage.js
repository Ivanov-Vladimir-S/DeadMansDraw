import React, { Component } from "react";

class Massage extends Component {
  render() {
    console.log("!!!");
    const { className, children } = this.props;
    if (className === "bust") {
      return (
        <div className={className} onClick={this.props.contin}>
          {children}
        </div>
      );
    } else {
      return <div className={className}>{children}</div>;
    }
  }
}

export default Massage;

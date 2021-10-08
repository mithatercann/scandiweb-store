import React, { Component } from "react";
import { changeQuantityAction } from "../../redux/actions/cartActions";
class CountBtn extends Component {
  handleClick = (type) => {
    changeQuantityAction({ product: this.props.product, type: type });
  };
  render() {
    const { type, size } = this.props;
    return (
      <button
        onClick={() => this.handleClick(type)}
        className={`count-cta count-cta--${size}`}
      >
        {type === "decrease" ? "-" : "+"}
      </button>
    );
  }
}

export default CountBtn;

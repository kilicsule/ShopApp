import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  NavItem,
  NavLink,
} from "reactstrap";

class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
                <Button color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}> X </Button>
              {cartItem.product.productName}
              <Button color="success"> {cartItem.quantity} </Button>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>
              <Link to="cart">Go to cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  renderEmptyCart() {
    return (
      <NavItem>
        <NavLink>Empty Cart</NavLink>
      </NavItem>
    );
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptyCart()}
      </div>
    );
  }
}

export default CartSummary;

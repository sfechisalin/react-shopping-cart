import React, { Component } from 'react'
import formatCurrency from '../utils';

export default class Cart extends Component {
    render() {
        const { cartItems } = this.props;

        return (
            <div>
                {cartItems.length === 0 ? <div className="cart cart-header"> Cart is empty </div> :
                    <div className="cart cart-header">You have {cartItems.length} items in the cart</div>}

                <div>
                    <div className="cart">
                        <ul className="cart-items">
                            {cartItems.map(item => (
                                <li key={item._id}>
                                    <div>
                                        <img src={item.image} alt={item.text} />
                                    </div>
                                    <div>
                                        <div>{item.title}</div>
                                        <div className="right">
                                            {formatCurrency(item.count)} x  {item.price} {" "}
                                            <button className="button" onClick={() => this.props.removeFromCart(item)} > Remove </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {
                        cartItems.length !== 0 && (
                            <div className="cart">
                                <div className="total">
                                    <div>
                                        Total: {" "}
                                        {formatCurrency(cartItems.reduce((accumulator, currentItem) => accumulator + currentItem.price * currentItem.count, 0))}
                                    </div>
                                    <button className="button primary">
                                        Proceed
                                    </button>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>

        )
    }
}

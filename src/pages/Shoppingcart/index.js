import { useEffect, useState } from 'react';
import { useData } from '~/Context/DataContext';
import classNames from 'classnames/bind';
import styles from '~/pages/Shoppingcart/Cart.module.scss';

const cx = classNames.bind(styles);

function ShoppingCart() {
    const [CART, setCART] = useState([]);
    const { cart } = useData();

    useEffect(() => {
        setCART(cart);
    }, [cart]);
    return (
        <div className={cx('nice')}>
            <div className={cx('main')}>
                {CART?.map((cartItem, cartindex) => {
                    return (
                        <div className={cx('wrapper')}>
                            <img src={cartItem.url} width={40} />
                            <span> {cartItem.name} </span>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index
                                            ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
                                            : item;
                                    });
                                    setCART(_CART);
                                }}
                            >
                                -
                            </button>
                            <span> {cartItem.quantity} </span>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item;
                                    });
                                    setCART(_CART);
                                }}
                            >
                                +
                            </button>
                            <span> Price : {cartItem.price * cartItem.quantity} </span>
                            <button
                                onClick={() => {
                                    const _CART = CART.filter((item, index) => index !== cartindex);
                                    setCART(_CART);
                                }}
                            >
                                X
                            </button>
                        </div>
                    );
                })}

                <p className={cx('total')}>
                    {' '}
                    Total <span></span>
                    {CART.map((item) => item.price * item.quantity).reduce((total, value) => total + value, 0)}
                </p>
            </div>
        </div>
    );
}

export default ShoppingCart;

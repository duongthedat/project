import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/comperman/Layout/DefaultLayout';
import { Fragment } from 'react';
import Header from './comperman/Layout/components/Header';
import Home from './pages/Home';
import ShoppingCart from './pages/Shoppingcart';
import { useState } from 'react';

function App() {
    const [product, setProduct] = useState([
        {
            url: 'https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
            name: 'TRQ White Shoes',
            category: 'Shoes',
            seller: 'AMZ Seller Ghz',
            price: 1999,
        },
        {
            url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
            name: 'LOREM Watch Black',
            category: 'Watches',
            seller: 'Watch Ltd Siyana',
            price: 2599,
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
            name: 'AMZ Laptop 8GB RAM',
            category: 'Laptops',
            seller: 'Delhi Laptops',
            price: 50000,
        },
    ]);

    const [cart, setCart] = useState([]);

    const addToCart = (data) => {
        setCart([...cart, { ...data, quantity: 1 }]);
    };

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>

                <Header count={cart.length}></Header>
                <ShoppingCart cart={cart}></ShoppingCart>
                <Home product={product} addToCart={addToCart}></Home>
            </div>
        </BrowserRouter>
    );
}

export default App;

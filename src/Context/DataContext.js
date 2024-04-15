import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [product, setProduct] = useState([
        {
            url: 'https://gcs.tripi.vn/public-tripi/tripi-feed/img/475027YGu/hinh-anh-avatar-zoro-chibi_012234086.jpg',
            name: 'RORONOA ZORO',
            category: 'SWORDSMAN',
            seller: 'MONKEY D LUFFY',
            price: 1111,
        },
        {
            url: 'https://gcs.tripi.vn/public-tripi/tripi-feed/img/475027YGu/hinh-anh-avatar-zoro-chibi_012234086.jpg',
            name: 'RORONOA ZORO',
            category: 'SWORDSMAN',
            seller: 'MONKEY D LUFFY',
            price: 1111,
        },
        {
            url: 'https://gcs.tripi.vn/public-tripi/tripi-feed/img/475027YGu/hinh-anh-avatar-zoro-chibi_012234086.jpg',
            name: 'RORONOA ZORO',
            category: 'SWORDSMAN',
            seller: 'MONKEY D LUFFY',
            price: 1111,
        },
        {
            url: 'https://gcs.tripi.vn/public-tripi/tripi-feed/img/475027YGu/hinh-anh-avatar-zoro-chibi_012234086.jpg',
            name: 'RORONOA ZORO',
            category: 'SWORDSMAN',
            seller: 'MONKEY D LUFFY',
            price: 1111,
        },
        {
            url: 'https://gcs.tripi.vn/public-tripi/tripi-feed/img/475027YGu/hinh-anh-avatar-zoro-chibi_012234086.jpg',
            name: 'RORONOA ZORO',
            category: 'SWORDSMAN',
            seller: 'MONKEY D LUFFY',
            price: 1111,
        },
        {
            url: 'https://i.pinimg.com/564x/05/fb/19/05fb199a1f269e3461610b5b58a208c1.jpg',
            name: 'RORONOA ZORO',
            category: 'SWORDSMAN',
            seller: 'MONKEY D LUFFY',
            price: 1111,
        },
    ]);
    const [cart, setCart] = useState([]);

    const addToCart = (data) => {
        setCart([...cart, { ...data, quantity: 1 }]);
    };

    return <DataContext.Provider value={{ product, cart, addToCart }}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);

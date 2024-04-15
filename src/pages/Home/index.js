import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';
import styles from '~/pages/Home/Home.module.scss';
import React from 'react';
import Slider from 'react-slick';
import { useData } from '~/Context/DataContext';
import { Link } from 'react-router-dom/dist';
import { CiShoppingCart } from 'react-icons/ci';
import { useState } from 'react';

const cx = classNames.bind(styles);
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'block',
                background: 'black',
                borderRadius: '50%',
                position: 'absolute',
                marginRight: '25px',
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'block',
                background: 'black',
                borderRadius: '50%',
                position: 'absolute',
                marginLeft: '25px',
                zIndex: '1',
            }}
            onClick={onClick}
        />
    );
}

function Home() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: (dots) => <ul style={{ marginBottom: '27px' }}>{dots}</ul>,
    };

    const { product, addToCart } = useData();
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 5;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = product.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('ccc')}>
                <Slider {...settings} arrows={true}>
                    <div className={cx('nice')}>
                        <img
                            className={cx('img-all')}
                            src="https://2.bp.blogspot.com/-eTYp4AIc4N8/WYsfyQtg8tI/AAAAAAAApg4/VPqwJ0kR1HkjjHIsoJioZyBT3e-asJU6wCLcBGAs/s1600/Roronoa.Zoro.full.1331723.jpg"
                            alt=""
                        />
                    </div>
                    <div className={cx('nice')}>
                        <img
                            alt=""
                            className={cx('img-all')}
                            src="https://file.vfo.vn/hinh/2015/12/anh-bia-one-pice-dep-cho-facebook-5.jpg"
                        />
                    </div>
                    <div className={cx('nice')}>
                        <img
                            className={cx('img-all')}
                            src="https://file.vfo.vn/hinh/2014/5/anh-bia-one-piece-15.jpg"
                            alt=""
                        />
                    </div>
                    <div className={cx('nice')}>
                        <img
                            className={cx('img-all')}
                            src="https://4.bp.blogspot.com/-myZEom3JE_w/UjRmfqykaEI/AAAAAAAACnY/zWoyJjvD7yg/s1600/Anh-bia-One-Piece-+(1).jpg"
                            alt=""
                        />
                    </div>
                    <div className={cx('nice')}>
                        <img
                            className={cx('img-all')}
                            src="https://4.bp.blogspot.com/-HdDGwfuwyYI/WYsf0enTrGI/AAAAAAAAphM/zAIYXA9fgfgFE3zBOJCDd79gXGFTuvwTQCLcBGAs/s1600/one_piece_children_s_day__update__by_arisa_chibara-d67ma17.jpg"
                            alt=""
                        />
                    </div>
                    <div className={cx('nice')}>
                        <img
                            className={cx('img-all')}
                            src="https://1.bp.blogspot.com/-_bsuySGEeyA/WYsfwv_Bk7I/AAAAAAAApgc/VhI9Hs_r4k0Q9FK6nPA5ilo4Izf-cDjWQCLcBGAs/s1600/40334.jpg"
                            alt=""
                        />
                    </div>
                </Slider>
            </div>

            <div className={cx('flex')}>
                {currentProducts.map((productItem, productIndex) => {
                    return (
                        <div className={cx('product-list')} key={productIndex} style={{ width: '19%' }}>
                            <div className={cx('product-item')}>
                                <Link to="/item" className={cx('hanghoa')}>
                                    <img src={productItem.url} width="100%" />
                                    <p className={cx('product-p')}>
                                        {productItem.name} | {productItem.category}{' '}
                                    </p>
                                    <p className={cx('product-p')}> {productItem.seller} </p>
                                    <p className={cx('product-total')}> TOTAL : {productItem.price}$</p>
                                </Link>
                                <div className={cx('cccccccc')}>
                                    <Link to="/null">
                                        <button className={cx('product-buy')}>BUY NOW</button>
                                    </Link>
                                    <button className={cx('product-button')} onClick={() => addToCart(productItem)}>
                                        <CiShoppingCart />
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className={cx('chuyentrang')}>
                <ul className={cx('pagination')}>
                    {[...Array(Math.ceil(product.length / productsPerPage)).keys()].map((pageNumber) => (
                        <li key={pageNumber} className={cx('page-item')}>
                            <button onClick={() => paginate(pageNumber + 1)} className={cx('page-link')}>
                                {pageNumber + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Home;

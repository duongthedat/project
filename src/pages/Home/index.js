import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';
import styles from '~/pages/Home/Home.module.scss';
import React from 'react';
import Slider from 'react-slick';

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

function Home({ product, addToCart }) {
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
                {product.map((productItem, productIndex) => {
                    return (
                        <div key={productIndex} style={{ width: '33%' }}>
                            <div className={cx('product-item')}>
                                <img src={productItem.url} width="100%" />
                                <p>
                                    {productItem.name} | {productItem.category}{' '}
                                </p>
                                <p> {productItem.seller} </p>
                                <p> Rs. {productItem.price} /-</p>
                                <button onClick={() => addToCart(productItem)}>Add To Cart</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;

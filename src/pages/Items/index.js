import classNames from 'classnames/bind';
import styles from '~/pages/Items/Items.module.scss';
import Slider from 'react-slick';
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

function Items() {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleDotClick = (index) => {
        setSelectedImageIndex(index);
    };

    const appendDots = (dots) => (
        <div>
            <ul
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                }}
            >
                {dots.map((dot, index) => (
                    <li key={index} onClick={() => handleDotClick(index)}>
                        {dot}
                    </li>
                ))}
            </ul>
        </div>
    );
    var settings = {
        customPaging: function (i) {
            return (
                <a style={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        src={`/img/zoro${i + 1}.jpg`}
                        style={{
                            width: '55px',
                            height: '60px',
                            objectFit: 'cover',
                            border: selectedImageIndex === i ? '1px solid red' : 'none',
                        }}
                    />
                </a>
            );
        },
        dots: true,
        dotsClass: 'slick-dots slick-thumb',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: appendDots,
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('inner-img')}>
                    <Slider {...settings}>
                        <div>
                            <img src={'/img/zoro1.jpg'} alt="" width="100%" height="430px" />
                        </div>
                        <div>
                            <img src={'/img/zoro2.jpg'} alt="" width="100%" height="430px" />
                        </div>
                        <div>
                            <img src={'/img/zoro3.jpg'} alt="" width="100%" height="430px" />
                        </div>
                        <div>
                            <img src={'/img/zoro4.jpg'} alt="" width="100%" height="430px" />
                        </div>
                        <div>
                            <img src={'/img/zoro5.jpg'} alt="" width="100%" height="430px" />
                        </div>
                        <div>
                            <img src={'/img/zoro1.jpg'} alt="" width="100%" height="430px" />
                        </div>
                    </Slider>
                </div>
                <div className={cx('inner-content')}>
                    <h1>vcl</h1>
                </div>
            </div>
        </div>
    );
}

export default Items;

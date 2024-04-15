import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { FaBars } from 'react-icons/fa';
import { useOutsideAlerter } from './vclcc';
import { useData } from '~/Context/DataContext';
import Tippy from '@tippyjs/react/headless';
import { Wrapper } from '~/comperman/Popper';
import AccountItem from '~/comperman/AccountItem';
import { FiX } from 'react-icons/fi';
import request from '~/utils/request';

const cx = classNames.bind(styles);

function Header() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    useEffect(() => {
        if (!searchValue.trim()) {
            return;
        }

        request
            .get(`users/search`, {
                params: {
                    q: searchValue,
                    type: 'less',
                },
            })
            .then((res) => {
                setSearchResult(res.data.data);
            });
    }, [searchValue]);

    const niceRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        setShowResult(false);
        niceRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const [isModalOpened, setIsModalOpened] = useState(false);
    const modalRef = useRef(null);

    useOutsideAlerter(modalRef, () => setIsModalOpened(false));

    const { cart } = useData();

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/">
                    <div className={cx('vcl')}>
                        <img className={cx('logo')} alt="" src="https://ghichu.vn/img/logo-ghichu.png" />
                    </div>
                </Link>
                <Tippy
                    interactive
                    visible={showResult && searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <Wrapper>
                                <h3 className={cx('search-title')}>Account</h3>
                                {searchResult.map((result) => (
                                    <AccountItem key={result.id} data={result} />
                                ))}
                            </Wrapper>
                        </div>
                    )}
                    onClickOutside={handleHideResult}
                >
                    <div className={cx('search')}>
                        <input
                            ref={niceRef}
                            value={searchValue}
                            spellCheck={false}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onFocus={() => setShowResult(true)}
                            className={cx('input')}
                            placeholder="Nhập để tìm kiếm sản phẩm..."
                        />
                        {!!searchValue && (
                            <button className={cx('button')} onClick={handleClear}>
                                <FiX />
                            </button>
                        )}
                    </div>
                </Tippy>
                <Link to="/shoppingcart" className={cx('gach')}>
                    <div className={cx('shopping-cart')}>
                        <CiShoppingCart />
                        <sup className={cx('number-sc')}>{cart.length}</sup>
                    </div>
                </Link>
                <div className={cx('menu')}>
                    <button onClick={() => setIsModalOpened(true)} className={cx('bars')}>
                        <FaBars />
                    </button>
                    {isModalOpened && (
                        <div className={cx('dropdown')} ref={modalRef}>
                            <Link to="/historybuy" className={cx('dd-vcl')}>
                                <p>Lịch sử</p>
                            </Link>
                            <Link to="/null" className={cx('dd-vcl')}>
                                <p>nice</p>
                            </Link>
                            <Link to="/dangky" className={cx('dd-vcl')}>
                                <p>Đăng ký/Đăng Nhập</p>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;

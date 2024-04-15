import classNames from 'classnames/bind';
import styles from './Dangky.module.scss';
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';

const cx = classNames.bind(styles);

function Dangky() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('lol')}>
                <h3 className={cx('h3')}>ĐĂNG NHẬP</h3>
                <div className={cx('search')}>
                    <input className={cx('nice')} placeholder="Name" />
                </div>
                <div className={cx('search-two')}>
                    <input className={cx('nice')} placeholder="Email" />
                </div>
                <div className={cx('search-two')}>
                    <input className={cx('nice')} placeholder="Password" />
                </div>
                <div className={cx('app')}>
                    <p className={cx('app-jdo')}>
                        <CiFacebook />
                        Facebook
                    </p>
                    <p className={cx('app-jdo')}>
                        <FaInstagram />
                        Instagram
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Dangky;

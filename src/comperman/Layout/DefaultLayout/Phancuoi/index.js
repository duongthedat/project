import classNames from 'classnames/bind';
import styles from './Phancuoi.module.scss';
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';

const cx = classNames.bind(styles);

function Phancuoi() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('fb')}>
                <CiFacebook className={cx('vcl')} />
                <p>Facebook</p>
            </div>
            <div className={cx('fb')}>
                <FaInstagram className={cx('vcl')} />
                <p>Instagram</p>
            </div>
            <div className={cx('fb')}>
                <FaTwitterSquare className={cx('vcl')} />
                <p>Twitter</p>
            </div>
        </div>
    );
}

export default Phancuoi;

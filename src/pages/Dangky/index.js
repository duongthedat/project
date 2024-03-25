import classNames from 'classnames/bind';
import styles from './Dangky.module.scss';

const cx = classNames.bind(styles);

function Dangky() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('lol')}>
                <h3 className={cx('h3')}>ĐĂNG NHẬP</h3>
                <div className={cx('search')}></div>
            </div>
        </div>
    );
}

export default Dangky;

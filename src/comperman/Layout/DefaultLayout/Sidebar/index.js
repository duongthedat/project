import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom/dist';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h3>TOP SALE</h3>
                <Link to="/item" className={cx('nice')}>
                    <div className={cx('inner-list')}>
                        <h3 className={cx('inner-item')}>1</h3>
                        <img
                            className={cx('inner-items')}
                            src="https://gcs.tripi.vn/public-tripi/tripi-feed/img/475027YGu/hinh-anh-avatar-zoro-chibi_012234086.jpg"
                            alt=""
                            width="10%"
                        />
                        <p className={cx('inner-itemd')}>RORONOA ZORO</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;

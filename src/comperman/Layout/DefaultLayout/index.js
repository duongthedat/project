import Header from '~/comperman/Layout/components/Header';
import Sidebar from './Sidebar';
import Phancuoi from './Phancuoi';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('context')}>{children}</div>
            </div>
            <Phancuoi />
        </div>
    );
}

export default DefaultLayout;

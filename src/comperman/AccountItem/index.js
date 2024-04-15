import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <span className={cx('name')}>{data.full_name}</span>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </div>
    );
}

export default AccountItem;

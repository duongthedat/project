import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useReducer, useRef, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { CiShoppingCart } from 'react-icons/ci';
import { FaBars } from 'react-icons/fa';
import { useOutsideAlerter } from './vclcc';

const nices = {
    job: '',
    jobs: [],
};

const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload,
    };
};

const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload,
    };
};

const deleteJob = (payload) => {
    return {
        type: DELETE_JOB,
        payload,
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload,
            };
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload],
            };
        case DELETE_JOB:
            const newJob = [...state.jobs];
            newJob.splice(action.payload, 1);
            return {
                ...state,
                jobs: newJob,
            };
        default:
            throw new Error('vcl...');
    }
};

const cx = classNames.bind(styles);

function Header(props) {
    const [state, dispatch] = useReducer(reducer, nices);
    const { job, jobs } = state;

    const niceRef = useRef();

    const handleSubmit = () => {
        dispatch(addJob(job));
        dispatch(setJob(''));
        niceRef.current.focus();
    };

    const [isModalOpened, setIsModalOpened] = useState(false);
    const modalRef = useRef(null);

    useOutsideAlerter(modalRef, () => setIsModalOpened(false));

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/">
                    <div className={cx('vcl')}>
                        <img className={cx('logo')} alt="" src="https://ghichu.vn/img/logo-ghichu.png" />
                    </div>
                </Link>
                <div className={cx('search')}>
                    <input
                        ref={niceRef}
                        className={cx('input')}
                        placeholder="Nhập để tìm kiếm sản phẩm..."
                        value={job}
                        onChange={(e) => dispatch(setJob(e.target.value))}
                    />
                    <button className={cx('button')} onClick={handleSubmit}>
                        <CiSearch />
                    </button>
                    <div className={cx('history-search')}>
                        {jobs.map((job, index) => (
                            <li className={cx('linhe')} key={index}>
                                {job}
                                <span className={cx('span')} onClick={() => dispatch(deleteJob(index))}>
                                    &times;
                                </span>
                            </li>
                        ))}
                    </div>
                </div>
                <Link to="/shoppingcart">
                    <div className={cx('shopping-cart')}>
                        <CiShoppingCart />
                        <sup>{props.count}</sup>
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

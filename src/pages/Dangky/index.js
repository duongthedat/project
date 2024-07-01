import classNames from 'classnames/bind';
import styles from './Dangky.module.scss';
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { useState } from 'react';
import { BiError } from 'react-icons/bi';

const cx = classNames.bind(styles);

function Dangky() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        // Cập nhật state formData với giá trị nhập mới của người dùng.
        setFormData({ ...formData, [name]: value });

        // Kiểm tra dữ liệu nhập của trường này và cập nhật trạng thái lỗi nếu cần nice.
        validateField(name, value);
    };

    const validateField = (name, value) => {
        let newErrors = { ...errors }; // Tạo bản sao của state errors.

        // Kiểm tra lỗi cho trường "username".
        if (name === 'username' && value.trim() === '') {
            newErrors.username = 'Username is required';
        } else {
            // Nếu không có lỗi, xóa lỗi của trường này khỏi newErrors.
            delete newErrors.username;
        }

        // Kiểm tra lỗi cho trường "email".
        if (name === 'email' && value.trim() === '') {
            newErrors.email = 'Email is required';
        } else {
            delete newErrors.email;
        }

        // Kiểm tra lỗi cho trường "password".
        if (name === 'password' && value.trim() === '') {
            newErrors.password = 'Password is required';
        } else {
            delete newErrors.password;
        }

        // Cập nhật state errors với giá trị mới.
        setErrors(newErrors);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('lol')}>
                <h3 className={cx('h3')}>ĐĂNG NHẬP</h3>
                <div className={cx('search')}>
                    <input
                        className={cx('nice')}
                        placeholder="Name"
                        value={formData.username}
                        onChange={handleChange}
                        type="text"
                        name="username"
                    />
                    {errors.username && (
                        <p style={{ color: 'red' }}>
                            <BiError /> {errors.username}
                        </p>
                    )}
                </div>
                <div className={cx('search-two')}>
                    <input
                        className={cx('nice')}
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        type="email"
                        name="email"
                    />
                    {errors.email && (
                        <p style={{ color: 'red' }}>
                            <BiError /> {errors.email}
                        </p>
                    )}
                </div>
                <div className={cx('search-two')}>
                    <input
                        className={cx('nice')}
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        type="password"
                        name="password"
                    />
                    {errors.password && (
                        <p style={{ color: 'red' }}>
                            <BiError /> {errors.password}
                        </p>
                    )}
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

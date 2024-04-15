import { CHECK_LOGIN_STATUS, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

// Hàm kiểm tra trạng thái đăng nhập
export const checkLoginStatus = () => {
    return (dispatch) => {
        // Gọi API backend để kiểm tra trạng thái đăng nhập
        // Ví dụ: fetch('/api/checkLoginStatus')
        // Trong ví dụ này, bạn sẽ gọi API '/api/checkLoginStatus' để kiểm tra trạng thái đăng nhập từ backend
        // Sau đó dispatch action CHECK_LOGIN_STATUS với kết quả trả về từ backend
        // (true nếu đã đăng nhập, false nếu chưa đăng nhập)
        // Bạn có thể thay đổi logic ở đây tùy thuộc vào cách bạn xây dựng API của mình
        fetch('/api/checkLoginStatus')
            .then((response) => response.json())
            .then((data) => {
                const isLoggedIn = data.isLoggedIn; // Giả sử API trả về thông tin có isLoggedIn
                dispatch({ type: CHECK_LOGIN_STATUS, payload: isLoggedIn });
            })
            .catch((error) => {
                console.error('Error checking login status:', error);
                dispatch({ type: CHECK_LOGIN_STATUS, payload: false });
            });
    };
};

// Hàm đăng nhập chỉ dùng cho trang đăng nhập
export const login = (credentials) => {
    return (dispatch) => {
        // Gọi API backend để đăng nhập
        // Ví dụ: fetch('/api/login', { method: 'POST', body: JSON.stringify(credentials) })
        // Trong ví dụ này, bạn sẽ gọi API '/api/login' để xác thực thông tin đăng nhập từ backend
        // và gửi thông tin đăng nhập (credentials) dưới dạng JSON
        // Nếu đăng nhập thành công, bạn sẽ nhận được một token từ backend
        // Bạn có thể thay đổi logic ở đây tùy thuộc vào cách bạn xây dựng API của mình
        fetch('/api/login', { method: 'POST', body: JSON.stringify(credentials) })
            .then((response) => response.json())
            .then((data) => {
                const token = data.token; // Giả sử API trả về token
                if (token) {
                    dispatch({ type: LOGIN_SUCCESS, payload: token });
                } else {
                    dispatch({ type: 'LOGIN_FAILURE' });
                }
            })
            .catch((error) => {
                console.error('Error logging in:', error);
                dispatch({ type: LOGIN_FAILURE });
            });
    };
};

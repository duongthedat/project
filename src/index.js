import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '~/comperman/GlobalStyle';

// import store from './reduxlogin/store';
// import { Provider } from 'react-redux';
// import { checkLoginStatus } from './reduxlogin/authActions';

const root = ReactDOM.createRoot(document.getElementById('root'));

// store.dispatch(checkLoginStatus());

root.render(
    <React.StrictMode>
        {/* <Provider store={store}> */}
        <GlobalStyles>
            <App />
        </GlobalStyles>
        {/* </Provider> */}
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

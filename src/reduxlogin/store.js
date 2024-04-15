import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Khởi tạo Redux store với rootReducer và middleware Redux Thunk
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;

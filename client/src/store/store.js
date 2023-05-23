// import { configureStore } from '@reduxjs/toolkit';
// import globalReducer from '../state';

// const store = configureStore({
//   reducer: {
//     global: globalReducer,
//     // Add more reducers here as needed
//   },
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import { middleware as RTKQueryMiddleware } from '@reduxjs/toolkit/query/react';
import authReducer from './state/index';
import { api } from '../state/api'; // Replace './api' with the correct path to your api.js file


const store = configureStore({
  reducer: {
    auth: authReducer,
    adminApi: api.reducer,
    // Add more reducers here as needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(RTKQueryMiddleware),
});

export default store;

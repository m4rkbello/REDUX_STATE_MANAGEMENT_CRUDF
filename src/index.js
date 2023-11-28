import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import App from './App';
import { userSlice } from './features/Users';
//import reducers
  import usersReducer from './features/Users'


const store = configureStore({
   reducer: {
      users: usersReducer,
   },
});

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
   </React.StrictMode>,
   document.getElementById('root')
);

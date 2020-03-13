import React from 'react';
import Root from "./src/navigators/root";
import { createStore, combineReducers } from "redux";
import { Provider } from 'react-redux';
import userReducer from "./src/store/reducers/user";

const rootReducer = combineReducers({
  user: userReducer
})

const store = createStore(rootReducer)

export default function App() {
  return (
      <Provider store={store}>
          <Root/>
      </Provider>
  );
}

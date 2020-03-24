import React from 'react';
import Root from "./src/navigators/root";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import userReducer from "./src/store/reducers/user";
import ParentsReducer from "./src/store/reducers/parents";
import GuardiansReducer from "./src/store/reducers/guardians";

const rootReducer = combineReducers({
    user: userReducer,
    parents: ParentsReducer,
    guardians: GuardiansReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default function App() {
  return (
      <Provider store={store}>
          <Root/>
      </Provider>
  );
}

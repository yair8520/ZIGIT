import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./redux/reducers";
import Login from "./components/Login/Login";
import Info from "./components/Info/Info";
import "./Asseets/App.css";
import history from "./config/history";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/info" component={Info} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;

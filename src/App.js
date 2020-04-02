import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import Login from './components/auth/LoginAdmin';
import Category from './components/category/Category';
import User from './components/user/User';
import Home from './components/home/Home';

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/user" component={User} />
      </Router>
    </Provider>
  );
}

export default App;

import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/Dashboard'
import Alert from './components/layout/Alert'
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './actions/auth'

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])
  return(
    <Provider store={store}>

    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
    </Provider>
  )
}


export default App;

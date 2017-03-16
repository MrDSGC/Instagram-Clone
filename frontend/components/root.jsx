import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app'
import Splashpage from './auth/splashpage'
import SessionFormContainer from './auth/session_form_container'
import SignUpFormContainer from './auth/signup_form_container'
import MainPageContainer from './main_page/main_page_container'
import ProfilePageContainer from './profile_page/profile_page_container'

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if(currentUser) {
      replace('/main')
    }
  }
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  return(
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <Route path='/splash' component={ Splashpage }>
            <Route
              path="/login"
              component={ SessionFormContainer}
              onEnter={ _redirectIfLoggedIn } />
            <Route
              path="/signup"
              component={ SignUpFormContainer }
              onEnter={ _redirectIfLoggedIn } />
          </Route>
          <Route path='/main' component = { MainPageContainer }>
            <Route path='/:username' component = { ProfilePageContainer }/>
          </Route>
        </Route>
      </Router>
    </Provider>
  )
};

export default Root;

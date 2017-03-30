import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import Modal from 'react-modal';
import configureStore from './store/store';

var http = require("http");


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;


  const root = document.getElementById('root');
  Modal.setAppElement(root)
  ReactDOM.render(<Root store={store}/>, root);
  setInterval(function() {
    http.get("https://fullstack-instaclone.herokuapp.com/");
  }, 3000000); // every 50 minutes (3000000)
});

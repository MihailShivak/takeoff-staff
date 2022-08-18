import React from 'react';
import { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from './store/UserStore';
import ContactsStore from './store/ContactsStore';

export const Context = createContext({
  user: new UserStore(),
  contact: new ContactsStore()
})

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    contact: new ContactsStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
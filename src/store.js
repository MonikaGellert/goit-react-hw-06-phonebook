// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './redux/contactsReducer';
import filterReducer from './redux/filterReducer';
import { loadState, saveState } from './Utils/LocalStorage';


const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  preloadedState, 
});


store.subscribe(() => {
  saveState(store.getState());
});
// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './redux/contactsReducer';
import filterReducer from './redux/filterReducer';
import { loadState, saveState } from './Utils/LocalStorage';

// Załaduj stan z lokalnego składu
const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  preloadedState, // Ustaw wcześniej załadowany stan
});

// Subskrybuj zmiany w sklepie Redux, aby zapisywać stan do lokalnego składu
store.subscribe(() => {
  saveState(store.getState());
});
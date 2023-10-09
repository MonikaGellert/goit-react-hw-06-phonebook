import axios from 'axios';
// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from './ContactsSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://651e8e0944a3a8aa4768947c.mockapi.io/';

export const fetcher = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get('/contact');
  return response.data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }) => {
    try {
      const response = await axios.post('/contact', { name, number });
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      const response = await axios.delete(`/contact/${id}`);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

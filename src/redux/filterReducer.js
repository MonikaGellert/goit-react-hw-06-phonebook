import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from './filterActions';

const filterReducer = createReducer('', builder => {
  builder.addCase(setFilter, (state, action) => {
    return action.payload;
  });
});

export default filterReducer;
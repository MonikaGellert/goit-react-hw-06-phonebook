import { addContact, deleteContact } from './contactsActions';

const initialState = JSON.parse(localStorage.getItem('contacts')) || [];

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case addContact.type:
      const newStateAfterAdd = [...state, action.payload];
      localStorage.setItem('contacts', JSON.stringify(newStateAfterAdd));
      return newStateAfterAdd;

    case deleteContact.type:
      const newStateAfterDelete = state.filter(contact => contact.id !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(newStateAfterDelete));
      return newStateAfterDelete;

    default:
      return state;
  }
};

export default contactsReducer;
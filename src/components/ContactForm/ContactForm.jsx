import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsActions';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(''); 
  const dispatch = useDispatch();
  const data = useSelector(state => state.contacts); 

  const handleChange = e => {
    const prop = e.currentTarget.name;
    switch (prop) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'phone': 
        setPhone(e.currentTarget.value);
        break;
      default:
        throw new Error('Error');
    }
  };


  const handleAddContact = async e => {
    e.preventDefault();
    if (
      data.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    ) {
      setName('');
      setPhone('');
      return alert(`Contact with name: ${name} is already in phonebook`); 
    }
    if (name && phone) {
      const newContact = { id: nanoid(), name, phone }; 
      await dispatch(addContact(newContact)); 
      setName('');
      setPhone('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleAddContact}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange} 
        placeholder="Enter name"
        required
        className={styles.input}
      />
      <input
        type="tel"
        name="phone"
        value={phone}
        onChange={handleChange} 
        placeholder="Enter number"
        required
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

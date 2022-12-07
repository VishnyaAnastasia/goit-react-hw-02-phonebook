import { nanoid } from 'nanoid';
import React, { Component } from 'react';
// import styles from './Section.module.css';
// import PropTypes from 'prop-types';

export class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();

    const name = this.state.name;
    const number = this.state.number;
    const id = nanoid();
    const newContact = { id: id, name: name, number: number };

    this.props.addContact(newContact);
    event.target.reset();
  };

  render() {
    const { submitHandler, inputHandler } = this;

    return (
      <form onSubmit={submitHandler}>
        <label>
          Name
          <input
            onInput={inputHandler}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            onInput={inputHandler}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}

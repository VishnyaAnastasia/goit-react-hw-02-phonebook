import React, { Component } from 'react';
// import styles from './Section.module.css';
// import PropTypes from 'prop-types';

export class Contacts extends Component {
  render() {
    const { contacts, deleteContact, filter } = this.props;
    return (
      <ul>
        {contacts
          .filter(contact => {
            return contact.name
              .toLowerCase()
              .includes(filter.trim().toLowerCase());
          })
          .map(contact => (
            <li key={contact.id}>
              {contact.name}:{contact.number}
              <button onClick={deleteContact} name={contact.id}>
                Delete
              </button>
            </li>
          ))}
      </ul>
    );
  }
}

import React from 'react';
import styles from './Contacts.module.css';
import PropTypes from 'prop-types';

export const Contacts = ({ contacts, deleteContact, filter }) => {
  return (
    <ul>
      {contacts
        .filter(contact => {
          return contact.name
            .toLowerCase()
            .includes(filter.trim().toLowerCase());
        })
        .map(contact => (
          <li className={styles.contactInfo} key={contact.id}>
            <div className={styles.contactLine}>
              {contact.name}: {contact.number}
            </div>
            <button
              className={styles.btnDelete}
              onClick={deleteContact}
              name={contact.id}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

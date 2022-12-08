import React, { Component } from 'react';
import styles from './Filter.module.css';
// import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    const { filterHandler } = this.props;
    return (
      <label>
        <input
          className={styles.inputView}
          onInput={filterHandler}
          type="text"
          name="filter"
          placeholder="Find contacts by name"
        />
      </label>
    );
  }
}

// Profile.propTypes = {
// };

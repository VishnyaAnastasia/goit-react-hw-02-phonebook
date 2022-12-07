import React, { Component } from 'react';
// import styles from './Section.module.css';
// import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    const { filterHandler } = this.props;
    return (
      <label>
        Find contacts by name
        <input onInput={filterHandler} type="text" name="filter" />
      </label>
    );
  }
}

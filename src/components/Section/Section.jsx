import React from 'react';
import styles from './Section.module.css';

export const Section = ({ children, title }) => {
  return (
    <div className={styles.sectionStyle}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </div>
  );
};

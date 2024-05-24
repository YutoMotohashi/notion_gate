"use client";
import React, { useState, useEffect } from 'react';
import App from '../components/App';
import styles from './page.module.css';

function Page() {
  return (
    <div className={styles.appContainer}>
      <App />
    </div>
  );
}

export default Page;

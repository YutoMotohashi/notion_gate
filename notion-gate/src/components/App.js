"use client";
import React, { useState, useEffect } from 'react';
import Settings from './Settings';
import AddEntryToDatabase from './AddEntryToDatabase';
import styles from './App.module.css';

function App() {
    const [apiKey, setApiKey] = useState('');
    const [databaseId, setDatabaseId] = useState('');

    useEffect(() => {
        const storedApiKey = localStorage.getItem('apiKey');
        const storedDatabaseId = localStorage.getItem('databaseId');
        if (storedApiKey) setApiKey(storedApiKey);
        if (storedDatabaseId) setDatabaseId(storedDatabaseId);
    }, []);

    return (
        <div className={styles.appContainer}>
            <Settings setApiKey={setApiKey} setDatabaseId={setDatabaseId} />
            <AddEntryToDatabase apiKey={apiKey} databaseId={databaseId} />
        </div>
    );
}

export default App;

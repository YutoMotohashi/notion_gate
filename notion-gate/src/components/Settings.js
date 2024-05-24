import React, { useState, useEffect } from 'react';

function Settings({ setApiKey, setDatabaseId }) {
    const [localApiKey, setLocalApiKey] = useState('');
    const [localDatabaseId, setLocalDatabaseId] = useState('');

    useEffect(() => {
        const storedApiKey = localStorage.getItem('apiKey');
        const storedDatabaseId = localStorage.getItem('databaseId');
        if (storedApiKey) setLocalApiKey(storedApiKey);
        if (storedDatabaseId) setLocalDatabaseId(storedDatabaseId);
    }, []);

    const handleApiKeyChange = (e) => setLocalApiKey(e.target.value);
    const handleDatabaseIdChange = (e) => setLocalDatabaseId(e.target.value);

    const handleSave = () => {
        localStorage.setItem('apiKey', localApiKey);
        localStorage.setItem('databaseId', localDatabaseId);
        setApiKey(localApiKey);
        setDatabaseId(localDatabaseId);
        alert('Settings saved!');
    };

    return (
        <div>
            <h1>Settings</h1>
            <label>
                Notion API Key:
                <input type="text" value={localApiKey} onChange={handleApiKeyChange} />
            </label>
            <label>
                Database ID:
                <input type="text" value={localDatabaseId} onChange={handleDatabaseIdChange} />
            </label>
            <button onClick={handleSave}>Save</button>
        </div>
    );
}

export default Settings;

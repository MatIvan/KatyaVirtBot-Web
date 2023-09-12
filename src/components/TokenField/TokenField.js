//@ts-check
import React, { useState } from 'react';
import './TokenField.css';
import StorageService from '../../service/StorageService';

/**
 * @param {{onEnter : Function}} props
 */
function TokenField({ onEnter }) {
    const [token, setToken] = useState(StorageService.getToken() || "");
    const [url, setUrl] = useState("http://localhost:8888");
    return (
        <div className='form TokenField'>
            <h1>Server:</h1>
            <div className='TokenField-token'>
                <label htmlFor="TokenField-url">Katya server:</label>
                <input
                    id="TokenField-url"
                    type="text"
                    value={url}
                    onChange={e => setUrl(e.target.value)} />
                <label htmlFor="TokenField-input">Enter token:</label>
                <input
                    id="TokenField-input"
                    type="text"
                    value={token}
                    onChange={e => setToken(e.target.value)} />
            </div>
            <button
                className='button TokenField-btn'
                onClick={() => { onEnter(url, token) }}
            >Apply</button>
        </div>
    );
}

export default TokenField;

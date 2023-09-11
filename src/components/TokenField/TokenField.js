//@ts-check
import React, { useState } from 'react';
import './TokenField.css';
import StorageService from '../../service/StorageService';

/**
 * @param {{onEnter : Function}} props
 */
function TokenField({ onEnter }) {
    const [token, setToken] = useState(StorageService.getToken());
    return (
        <div className='TokenField'>
            <label htmlFor="token-input">Enter token:</label>
            <input
                id="token-input"
                type="text"
                value={token}
                onChange={e => setToken(e.target.value)} />
            <button
                className='submit-btn'
                onClick={() => { onEnter(token) }}
            >Apply</button>
        </div>
    );
}

export default TokenField;

//@ts-check
import React, { useEffect, useState } from 'react';
import './HookEditor.css';
import HookEditorLine from './HookEditorLine';

/**
 * @typedef {import('../../service/ApiService').WebHook} WebHook
 */

/**
 * @param {{newHook : WebHook | undefined}} props
 */
function HookEditor({ newHook }) {
    const [id, setId] = useState(newHook?.id);
    const [userId, setUserId] = useState(newHook?.userId);
    const [name, setName] = useState(newHook?.name);
    const [url, setUrl] = useState(newHook?.url);

    useEffect(() => {
        setId(newHook?.id);
        setUserId(newHook?.userId);
        setName(newHook?.name);
        setUrl(newHook?.url);
    }, [newHook]);

    const onSave = () => {
        /** @type {WebHook} */
        const hook = {
            id, userId, name, url,
            condition: {
                chatName: "",
                contains: [],
                startWith: [],
                caseSensitive: false
            }
        }
        console.log(hook);
    }

    return (
        <div className='form HookEditor'>
            <h1>Edit hook:</h1>
            <HookEditorLine key='line-id' caption='id:' value={id} readOnly={true} />
            <HookEditorLine key='line-userid' caption='userId:' value={userId} readOnly={true} />
            <HookEditorLine key='line-name' caption='name:' value={name} onChange={(newName) => { setName(newName) }} />
            <HookEditorLine key='line-url' caption='url:' value={url} onChange={(newUrl) => { setUrl(newUrl) }} />
            <button className='HookEditor-save-btn' onClick={() => { onSave() }} >save</button>
        </div>
    );
}

export default HookEditor;

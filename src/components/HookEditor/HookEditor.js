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
    const [chat, setChat] = useState(newHook?.condition?.chatName);
    const [contains, setContains] = useState(newHook?.condition?.contains?.toString());
    const [startWith, setStartWith] = useState(newHook?.condition?.startWith?.toString());
    const [sens, setSens] = useState(newHook?.condition?.caseSensitive);

    useEffect(() => {
        setId(newHook?.id);
        setUserId(newHook?.userId);
        setName(newHook?.name);
        setUrl(newHook?.url);
        setChat(newHook?.condition?.chatName);
        setContains(newHook?.condition?.contains?.toString());
        setStartWith(newHook?.condition?.startWith?.toString());
        setSens(newHook?.condition?.caseSensitive);
    }, [newHook]);

    const onSave = () => {
        /** @type {WebHook} */
        const hook = {
            id, userId, name, url,
            condition: {
                chatName: chat,
                contains: contains?.split(',').map(s => s.trim()),
                startWith: startWith?.split(',').map(s => s.trim()),
                caseSensitive: sens === undefined ? false : sens
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
            <HookEditorLine key='line-chat' caption='chat:' value={chat} onChange={(newChat) => { setChat(newChat) }} />
            <HookEditorLine key='line-contains' caption='contains:' value={contains} onChange={(newContains) => { setContains(newContains) }} />
            <HookEditorLine key='line-startWith' caption='startWith:' value={startWith} onChange={(newStartWith) => { setStartWith(newStartWith) }} />
            <HookEditorLine key='line-sens' caption='sens:' value={sens} onChange={(newSens) => { setSens(newSens) }} />
            <button className='HookEditor-save-btn' onClick={() => { onSave() }} >save</button>
        </div>
    );
}

export default HookEditor;

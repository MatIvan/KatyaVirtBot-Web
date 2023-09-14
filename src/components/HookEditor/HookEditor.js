//@ts-check
import React, { useEffect, useState } from 'react';
import './HookEditor.css';
import { Text, Input, Boolean } from './FormLine';
import ApiService from '../../service/ApiService';

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

    const getHook = () => {
        return {
            id, userId, name, url,
            condition: {
                chatName: chat,
                contains: contains?.split(',').map(s => s.trim()),
                startWith: startWith?.split(',').map(s => s.trim()),
                caseSensitive: sens === undefined ? false : sens
            }
        }
    }

    const fillEmptyHook=()=>{
        setId(-1);
        setUserId(newHook?.userId);
        setName('new hook');
        setUrl('http://address');
        setChat('COMMON');
        setContains(undefined);
        setStartWith(undefined);
        setSens(true);
    }

    return (
        <div className='form HookEditor'>
            <h1>Edit hook:</h1>
            <Text key='line-id' caption='id:' value={id} />
            <Text key='line-userid' caption='userId:' value={userId} />
            <Input key='line-name' caption='name:' value={name} onChange={(newName) => { setName(newName) }} />
            <Input key='line-url' caption='url:' value={url} onChange={(newUrl) => { setUrl(newUrl) }} />
            <Input key='line-chat' caption='chat:' value={chat} onChange={(newChat) => { setChat(newChat) }} />
            <Input key='line-contains' caption='contains:' value={contains} onChange={(newContains) => { setContains(newContains) }} />
            <Input key='line-startWith' caption='startWith:' value={startWith} onChange={(newStartWith) => { setStartWith(newStartWith) }} />
            <Boolean key='line-sens' caption='sens:' value={sens} onChange={(newSens) => { setSens(newSens) }} />
            <div className='HookEditor-UI'>
                <button className='HookEditor-btn' onClick={() => { deleteHook(id) }} >delete</button>
                <button className='HookEditor-btn' onClick={() => { fillEmptyHook() }} >add</button>
                <button className='HookEditor-btn' onClick={() => { saveHook(getHook()) }} >save</button>
            </div>
        </div>
    );
}

function saveHook(hook) {
    ApiService.saveHook(hook);
}

function deleteHook(id) {
    ApiService.deleteHook(id);
}

export default HookEditor;

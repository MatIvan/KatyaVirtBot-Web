//@ts-check
import React from 'react';
import './HookList.css';

/**
 * @typedef {import('../../service/ApiService').WebHook} WebHook
 */

/**
 * @param {{hooks: WebHook[] | undefined,selectedHook: WebHook | undefined, onSelect : Function}} props
 */
function HookList({ hooks, selectedHook, onSelect }) {
    if (!hooks || hooks.length < 1) {
        return (<div className='form HookList'><h1>Hooks:</h1>empty</div>);
    }
    const lines = hooks.map((hook, index) => {
        const selected = hook.id === selectedHook?.id ? "HookList-line-selected" : "";
        return (<div
            key={'hook-' + index}
            className={'HookList-line ' + selected}
            onClick={() => {
                onSelect(hook);
            }}>
            {hook.name}
        </div>)
    });
    return (
        <div className='form HookList'>
            <h1>Hooks:</h1>
            {lines}
        </div>
    );
}

export default HookList;

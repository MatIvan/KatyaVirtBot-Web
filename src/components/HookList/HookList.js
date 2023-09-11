//@ts-check
import React from 'react';
import './HookList.css';

/**
 * @typedef {import('../../service/ApiService').WebHook} WebHook
 */

/**
 * @param {{hooks: WebHook[] | undefined, onSelect : Function}} props
 */
function HookList({ hooks, onSelect }) {
    if (!hooks || hooks.length < 1) {
        return (<div className='hooklist'>empty</div>);
    }
    const lines = hooks.map((hook, index) => {
        return (<div key={'hook-' + index} className='hookline'>{hook.id}</div>)
    });
    return (
        <div className='hooklist'>
            {lines}
        </div>
    );
}

export default HookList;

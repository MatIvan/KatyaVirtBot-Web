//@ts-check
import React from 'react';

/**
 * @typedef {object} Params
 * @property {string} caption
 * @property {*} value
 * @property {((val:*)=>void)=} onChange
 * @property {boolean=} readOnly
 */

/**
 * @param {Params} params
 */
function HookEditorLine({ caption, value, onChange, readOnly }) {
    const isBool = typeof value === "boolean";
    const inputType = isBool ? 'checkbox' : 'text';

    return (
        <div className='HookEditorLine'>
            <div className='HookEditorLine-caption'>{caption}</div>
            {readOnly ? (
                <div className='HookEditorLine-text'>{value}</div>
            ) : (
                <input
                    className='HookEditorLine-input'
                    type={inputType}
                    value={value === undefined ? '' : value}
                    onChange={e => {
                        if (onChange) onChange(
                            isBool
                                ? e.target.checked
                                : (e.target.value === '' ? undefined : e.target.value))
                    }} />
            )}
        </div>
    );
}

export default HookEditorLine;

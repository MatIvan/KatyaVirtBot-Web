//@ts-check
import React from 'react';

/** 
 * @param {string} type
 * @param {*} value
 * @param {((val: *) => void)=} onChange
 */
function getComponent(type, value, onChange) {
    const value_ = value === undefined ? '' : value;
    const onChangeValue = ({ target }) => {
        onChange && onChange(target.value === '' ? undefined : target.value);
    }
    const onChangeChacked = ({ target }) => {
        onChange && onChange(target.checked);
    }
    switch (type) {
        case 'text':
            return (<div className='HookEditorLine-text'>{value_}</div>)
        case 'input':
            return (<input value={value_} onChange={onChangeValue} type='text' className='HookEditorLine-input' />)
        case 'number':
            return (<input value={value_} onChange={onChangeValue} type='number' className='HookEditorLine-number' />)
        case 'boolean':
            return (<input checked={value_} onChange={onChangeChacked} type='checkbox' className='HookEditorLine-checkbox' />)
        default:
            return (<></>);
    }
}

/**
 * @typedef {Object} Params
 * @property {'text' | 'input' | 'boolean' | 'number'} type
 * @property {string} caption
 * @property {*} value
 * @property {((val: *) => void)=} onChange
 */

/**
 * @param {Params} params
 */
function FromLine({ type, caption, value, onChange }) {
    return (
        <div className='HookEditorLine'>
            <div className='HookEditorLine-caption'>{caption}</div>
            {getComponent(type, value, onChange)}
        </div>
    );
}

/**
 * @param {{ caption:string, value:* }} params 
 */
export function Text(params) { return FromLine({ ...params, type: 'text' }) };

/**
 * @param {{ caption:string, value:string|undefined, onChange:(val:string)=>void }} params 
 */
export function Input(params) { return FromLine({ ...params, type: 'input' }) };

/**
 * @param {{ caption:string, value:boolean|undefined, onChange:(val:boolean)=>void }} params 
 */
export function Boolean(params) { return FromLine({ ...params, type: 'boolean' }) };

/**
 * @param {{ caption:string, value:number|undefined, onChange:(val:number)=>void }} params 
 */
export function Number(params) { return FromLine({ ...params, type: 'number' }) };

//@ts-check
import React, { useState } from 'react';
import './App.css';
import HookService from '../../service/HookService';
import ApiService from '../../service/ApiService';
import HookList from '../HookList/HookList';
import TokenField from '../TokenField/TokenField';
import StorageService from '../../service/StorageService';

function App() {
  const [hooks, setHooks] = useState();
  HookService.setHook('hooks', setHooks);

  return (
    <div className='body-grid'>
      <div className='body-left'>
        <TokenField
          onEnter={(url, newToken) => { setToken(url, newToken) }} />
        <HookList
          hooks={hooks}
          onSelect={(hookId) => { onHookSelect(hookId) }} />
      </div>
      <div className='body-right'>
        right
      </div>
    </div>
  );
}

function setToken(url, newToken) {
  HookService.fire('hooks', undefined);
  StorageService.saveUrl(url);
  StorageService.saveToken(newToken);
  ApiService.getAllHooks();
}

function onHookSelect(hook) {
  console.log("hook: ", hook)
}

export default App;

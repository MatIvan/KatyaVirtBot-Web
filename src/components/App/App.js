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
      <TokenField
        onEnter={(newToken) => { setToken(newToken) }} />
      <HookList
        hooks={hooks}
        onSelect={(hookId) => { onHookSelect(hookId) }} />
    </div>
  );
}

function setToken(newToken) {
  HookService.fire('hooks', undefined);
  StorageService.saveToken(newToken);
  ApiService.getAllHooks();
}

function onHookSelect(hookId) {
  console.log("hookId: ", hookId)
}

export default App;

//@ts-check
import React, { useState } from 'react';
import './App.css';
import HookService from '../../service/HookService';
import ApiService from '../../service/ApiService';
import HookList from '../HookList/HookList';
import TokenField from '../TokenField/TokenField';
import HookEditor from '../HookEditor/HookEditor';
import StorageService from '../../service/StorageService';

function App() {
  const [hooks, setHooks] = useState();
  HookService.setHook('hooks', setHooks);

  const [hook, setHook] = useState();
  HookService.setHook('hook', setHook);

  return (
    <div className='body-grid'>
      <div className='body-left'>
        <TokenField
          onEnter={(url, newToken) => { setToken(url, newToken) }} />
        <HookList
          hooks={hooks}
          onSelect={(hookId) => { setHook(hookId) }} />
      </div>
      <div className='body-right'>
        <HookEditor
          newHook={hook}
        />
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

export default App;

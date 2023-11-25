import React from 'react';
import {
  BrowserRouter,
} from "react-router-dom";
import './App.css';
import { Provider } from 'mobx-react';
import Index from './page/index'
import {commonStore, homeStore} from "./store/init";
import { observer } from "mobx-react"


const App = observer(() => {
  return (
    <Provider {...{
      commonStore,
      homeStore,
    }}>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </Provider>
  );
})

export default App;

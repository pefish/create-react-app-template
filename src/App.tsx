import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './page/home'
import { Provider } from 'mobx-react';
import CommonStore from './store/common_store';
import HomeStore from './store/home_store';
import NotFound from './page/not_found'
const commonStore = new CommonStore()
const homeStore = new HomeStore(commonStore)
const stores = {
  commonStore,
  homeStore,
};

const App: React.FC = () => {
  return (
    <Provider {...stores}>
      <Router>
        <div style={{
          width: `100%`,
          height: `100%`,
        }}>
          <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/" component={Home}/>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

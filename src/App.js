import React from 'react';
import {
    Route,
    BrowserRouter as Router,
    Switch,
    NavLink,
} from "react-router-dom";
import Home from './modules/Home/Home';
import NotFound from './modules/NotFound/index.js';
import Player from './modules/Player/index.js';
import SideNavContainer from './modules/SideNavContainer/index.js';

import './App.scss';
const routes = [
    {
      path: "home",
      exact: true,
      main: () => <Home/>
    },
    {
      path: "search",
      exact: true,
      main: () => <h2>search</h2>
    },
    {
      path: "user",
      main: () => <h2>user</h2>
    },
    {
      path: "settings",
      main: () => <h2>settings</h2>
    }
  ];

function App() {
    return (
        <Router>
            <Switch>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                    />
                ))}
            </Switch>
            <Switch>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={`/${route.path}`}
                        exact={route.exact}
                    >
                        <SideNavContainer routes={routes}>
                            {<route.main />}
                        </SideNavContainer>
                    </Route>
                ))}
                <Route path="//">
                    <SideNavContainer routes={routes}>
                        <Home/>
                    </SideNavContainer>
                </Route>
                <Route path="/player/:id" component={Player}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </Router>
    );
}

export default App;
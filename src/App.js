import React from 'react';
import {
    Route,
    BrowserRouter as Router,
    Switch,
    NavLink,
} from "react-router-dom";
import Home from './Home';
import NotFound from './NotFound';
import Player from './modules/Player/index.js';

import './App.scss';
const routes = [
    {
      path: "/",
      exact: true,
      sidebar: () => <div>home!</div>,
      main: () => <Home/>
    },
    {
      path: "/search",
      exact: true,
      sidebar: () => <div>search!</div>,
      main: () => <h2>search</h2>
    },
    {
      path: "/home",
      exact: true,
      sidebar: () => <div>home!</div>,
      main: () => <Home/>
    },
    {
      path: "/user",
      sidebar: () => <div>user!</div>,
      main: () => <h2>user</h2>
    },
    {
      path: "/settings",
      sidebar: () => <div>settings!</div>,
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
                    // children={<route.sidebar />}
                    />
                ))}
            </Switch>
            <Switch>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                    >
                        <div className="" style={{ display: "flex", overflow:"hidden", height:"100vh"}}>
                            <aside className="side-nav">
                                <ul className="nav-items">
                                    <NavLink className="nav-item icon-place-holder logo" to="/"/>
                                    <NavLink className="nav-item icon-place-holder search" to="/search"/>
                                    <NavLink className="nav-item icon-place-holder home" to="/home"/>
                                    <NavLink className="nav-item icon-place-holder user" to="/user"/>
                                    <NavLink className="nav-item icon-place-holder settings" to="/settings"/>
                                </ul>
                            </aside>
                            <div className="App App-header">
                                {<route.main />}
                            </div>
                        </div>
                    </Route>
                ))}
                <Route path="/player/:id" component={Player}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </Router>
    );
}

export default App;
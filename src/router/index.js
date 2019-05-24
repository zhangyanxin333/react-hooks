import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import List from '../pages/List';
import Counter from '../pages/Counter';


const RouterMap = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/list" component={List}/>
                    <Route path="/count" component={Counter}/>
                </Switch>
            </div>
        </Router>
    );
};

export default RouterMap;
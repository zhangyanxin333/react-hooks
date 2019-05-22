import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import List from '../pages/List';

const RouterMap = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/list" component={List}/>
                </Switch>
            </div>
        </Router>
    );
};

export default RouterMap;
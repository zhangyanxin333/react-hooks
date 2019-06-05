import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import List from '../pages/List';
import Counter from '../pages/Counter';
import Detail from '../pages/Detail';
import Flex from '../pages/Flex';


const RouterMap = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/list" component={List}/>
                    <Route path="/count" component={Counter}/>
                    <Route path="/detail" component={Detail}/>
                    <Route path="/flex" component={Flex}/>
                </Switch>
            </div>
        </Router>
    );
};

export default RouterMap;
import React from 'react';
import {BrowserRouter as Router, Route, Link,Redirect, Switch} from 'react-router-dom';
import List from '../pages/List';

const RouterMap = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/list" component={List} />
                    {/* <Route exact path="/" render={() => 
                        <Redirect to='/login'></Redirect>}
                    />
                    <Route path="/login" component={Login} />
                    <Route path="/text" component={Text} />
                    <Route path="/videoImg" component={VideoImg}/>
                    <Route path="/main" component={Main}/>
                    <Route path="*" component={Error} /> */}
                </Switch>
            </div>
        </Router>
    )
    
}

export default RouterMap
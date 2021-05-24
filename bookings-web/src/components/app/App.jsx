import React from 'react';
import Getaways from '../../containers/Getaways';
import { DetailContainer } from '../../containers/DetailContainer';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { SignupContainer } from '../../containers/SignupContainer';
import { LoginContainer } from '../../containers/LoginContainer';

export default function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Getaways} />
                    <Route exact path="/signup" component={SignupContainer} />
                    <Route exact path="/login" component={LoginContainer} />
                    <Route exact path="/:id" component={DetailContainer} />
                </Switch>
            </Router>
        </div>
    );
}
//import router and create routes

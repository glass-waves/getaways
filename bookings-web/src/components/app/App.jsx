import React, { useState } from 'react';
import Getaways from '../../containers/Getaways';
import { DetailContainer } from '../../containers/DetailContainer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { SignupContainer } from '../../containers/SignupContainer';
import { LoginContainer } from '../../containers/LoginContainer';
import { checkIfLoggedIn } from '../../services/checkIfLoggedIn';
import { Header } from '../header/Header';
import EditUserContainer from '../../containers/EditUserContainer';

export default function App() {
    const [user, setUser] = useState(null);

    const updateUser = async () => {
        checkIfLoggedIn().then((res) => {
            if (res.status) {
                setUser(null);
            } else {
                setUser(res);
            }
        });
    };

    return (
        <div>
            <Router>
                <Header user={user} />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(routeProps) => (
                            <Getaways {...routeProps} updateUser={updateUser} />
                        )}
                    />
                    <Route exact path="/signup" component={SignupContainer} />
                    <Route exact path="/login" component={LoginContainer} />
                    <Route
                        exact
                        path="/edituser"
                        render={(routeProps) => (
                            <EditUserContainer
                                {...routeProps}
                                updateUser={updateUser}
                            />
                        )}
                    />

                    <Route exact path="/:id" component={DetailContainer} />
                </Switch>
            </Router>
        </div>
    );
}

//import router and create routes


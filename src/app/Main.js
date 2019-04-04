import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './about/About';
import Posts from '../entities/Posts';


class Main extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <main>
                <Posts />
                {/* <Switch>
                    <Route path='/' component={About} />

                </Switch> */}

            </main>
        )
    }
}

export default Main;
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './about/About';
import PostsList from '../entities/PostsList';
import AuthorPage from './authors/AuthorPage';
import AuthorList from './authors/AuthorList';
import PostPage from '../entities/PostPage';


class Main extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <main>
                <Switch>
                    
                    <Route path='/author/:authorId' component={AuthorPage} />
                    <Route path='/about' component={About} />
                    <Route path='/authors' component={AuthorList} />
                    <Route path='/post-page/:postId' component={PostPage} />
                    <Route path='/' component={PostsList} />
                </Switch>

            </main>
        )
    }
}

export default Main;
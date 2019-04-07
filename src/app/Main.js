import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './about/About';
import PostsList from '../app/posts/PostsList';
import AuthorPage from './authors/AuthorPage';
import AuthorList from './authors/AuthorList';
import PostPage from '../app/posts/PostPage';
import NewPost from '../app/posts/NewPost';


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
                    <Route path='/posts/new' component={NewPost} />
                    <Route path='/' component={PostsList} />
                </Switch>

            </main>
        )
    }
}

export default Main;
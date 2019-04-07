import React from 'react';
import { Link } from 'react-router-dom';
import FetchPosts from '../../services/FetchPosts'

class PostsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        FetchPosts()
            .then((posts) => {
                this.setState({
                    posts: posts
                })
            })
    }

    render() {
        return (
            <>
                <div>
                    <h2>POSTS</h2>
                    <div>
                        {this.state.posts.map((post) => (
                            <div>
                                <h6><Link to={`/post-page/${post.id}`}>Id: {post.id}.
                                Title: {post.title}</Link></h6>
                                <p>{post.body}</p>
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}
export default PostsList;
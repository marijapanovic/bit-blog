import React from 'react';
import { Link } from 'react-router-dom';
import { FetchPost } from '../../services/FetchPosts';
import { FetchAuthor, FetchAuthorPosts } from '../../services/FetchAuthors';


class PostPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {},
            author: {},
            posts : []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.postId
        FetchPost(id)
            .then((post) => {
                this.setState({
                    post: post
                })
                const authorId = this.state.post.authorId
                FetchAuthor(authorId)
                    .then((author) => {
                        this.setState({
                            author: author
                        })
                    })
                FetchAuthorPosts(authorId)
                    .then((posts) =>{
                        this.setState({
                            posts : posts
                        })
                    })
            })
    }

    componentDidUpdate(prevProps){
        if(prevProps.postId !== this.props.match.params.postId){
            FetchPost(this.props.match.params.postId)
            .then((post) =>{
                this.setState({
                    post : post
                })
            })
           
        }
    }

    render() {
        const author = this.state.author;
        return (
            <>
                <div>
                    <div>
                        <div>
                            <h2>{this.props.match.params.postId} - {this.state.post.title}</h2>
                            
                            <h4><Link to={`/author/${this.state.post.authorId}`}>
                                Name: {author.name} ,
                                Username: {author.username} 
                            </Link></h4>
                        </div>
                        <p>{this.state.post.body}</p>
                        <hr />
                        <h4>{this.state.posts.length -1} more posts from same author</h4>
                        <div>
                            
                        {this.state.posts.map((post) =>(
                            <p><Link to={`/post-page/${post.id}`}>ID:{post.id}Title:{post.title}</Link></p>
                            ))}
                        </div>
                    </div>
                </div>
            </>

        )
    }
}
export default PostPage;
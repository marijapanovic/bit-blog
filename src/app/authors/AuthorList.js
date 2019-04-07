import React from 'react';
import { Link } from 'react-router-dom';
import FetchAuthors, { FetchAuthorPosts } from '../../services/FetchAuthors';


class AuthorList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            authors:[],
            authorposts:[]
        }
    }
    componentDidMount(){
        FetchAuthors()
        .then((authors) =>{
            this.setState({
                authors : authors
            })
            const id = this.props.match.params.authorId
            FetchAuthorPosts(id)
            .then((authorposts) => {
                this.setState({
                    authorposts : authorposts
                })
               // console.log(authorposts);
            })
            //console.log(authors);  
        })
    }
    render(){
    return (
        <>
            <div>
                <h2>AUTHORS({this.state.authors.length})</h2>

                <div>
                    {this.state.authors.map((author) =>(
                        <div>{author.street}
                        <p><Link to={`/author/${author.authorId}`}>AuthorId :{author.authorId},Author Name: {author.name}(2 - posts)
                        </Link></p>
                        <hr></hr>
                    </div>
                    ))}
                    
                </div>
            </div>
        </>
        )
    }
}
export default AuthorList;
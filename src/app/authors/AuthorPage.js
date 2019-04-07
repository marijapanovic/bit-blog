import React from 'react';
import { FetchAuthor } from '../../services/FetchAuthors';

class AuthorPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            author: {}
        }
    }

    componentDidMount() {
        const authorId = this.props.match.params.authorId;// parametar iz route
        FetchAuthor(authorId)
            .then((author) => {
                //console.log(author);
                this.setState({
                    author: author
                })
            }
            )
    }

    render() {
        return (
            <>
                <div>
                    <h2>SINGLE AUTHOR</h2>

                    <div>
                        <img src='https://via.placeholder.com/150' alt='' />
                        <h3>{this.state.author.name}</h3>
                        <p>username: {this.state.author.username}</p>
                        <p>email: {this.state.author.email} </p>
                        <p>phone: {this.state.author.phone}</p>

                        <hr></hr>
                    </div>

                    <div>
                        <h3>Address</h3>
                        <p>street: {this.state.author.street}</p>
                        <p>city: {this.state.author.city}</p>
                        <p>zipcode: {this.state.author.zipcode}</p>
                        <iframe>
                            Google MAP ubaciti !!!
                        </iframe>

                        <hr></hr>
                    </div>

                    <div>
                        <h3>Company</h3>
                        <p>name: {this.state.author.companyname}</p>
                        <p>slogan:{this.state.author.companybs}</p>

                        <hr></hr>
                    </div>

                </div>
            </>
        )
    }
}
export default AuthorPage;
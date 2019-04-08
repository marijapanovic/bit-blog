import React from 'react';
import { FetchAuthor } from '../../services/FetchAuthors';
import {Link} from 'react-router-dom';

class AuthorPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            author: {}
        }
    }

    componentDidMount() {
        const authorId = this.props.match.params.authorId;// parametar from route
        FetchAuthor(authorId)
            .then((author) => {
                this.setState({
                    author: author
                })
            }
            )
    }

    render() {
        return (
            <>
                <div className="authorList">
                <p className="back"><Link to='/authors' >{`<<`}</Link></p>
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
                        <iframe src={`https://www.google.com/maps/@${this.state.author.geolat},${this.state.author.geolng},12z`} height='300px' width='400px'></iframe>
//                       //src={`https://maps.google.com/maps?q=${this.state.author.geoLat},${this.state.author.geoLng}&hl=es;z=14&amp;&output=embed`}>
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

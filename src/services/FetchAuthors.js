import ShareData from '../shared/ShareData';
import Author from '../entities/Author';
import Post from '../entities/Post';


const FetchAuthors = () => (
    fetch(ShareData.urlAuthors)
        .then(response => response.json())
        .then(authorsArray => {
            const authors = authorsArray.map((author) => {
                return  new Author(author.id, author.name, author.username , author.email, author.phone, author.address.street, 
                    author.address.city, author.address.zipcode, author.company.name, author.company.bs)
            }
            )
            return authors
        })
)

export const FetchAuthor = (authorId) => (
    fetch(`${ShareData.urlAuthors}/${authorId}`)
        .then(response => {
            return response.json()})
        .then(author => {
            return new Author(author.id, author.name, author.username , author.email, author.phone, author.address.street, 
                author.address.city, author.address.zipcode, author.company.name, author.company.bs)
        })

);

export const FetchAuthorPosts = (authorId) =>(
    fetch(`${ShareData.urlAuthorPosts}${authorId}`)
    .then(response => response.json())
    .then(authorPostsArray => {
        const authorPosts = authorPostsArray.map((post)=>{
            return new Post(post.id, post.title, post.body, post.authorId)
        })
        return authorPosts;
    })
)

export default FetchAuthors;

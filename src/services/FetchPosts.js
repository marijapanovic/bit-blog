import ShareData from '../shared/ShareData';
import Post from '../entities/Post';


const FetchPosts = () => (
    fetch(ShareData.urlPosts)
        .then(response => response.json())

        .then(apiPosts => {
            const posts = apiPosts
                .map((post) => {
                    return new Post(post.id, post.title, post.body, post.userId);

                })

            return posts;
        })
)
export const FetchPost = (id) => (
    fetch(`${ShareData.urlPosts}/${id}`)
        .then(response => response.json())
        .then(post => {
            return new Post(post.id, post.title, post.body, post.userId);
        })
);

export default FetchPosts;
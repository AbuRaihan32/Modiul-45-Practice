import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
const Post = ({post}) => {
    return (
        <div className="border p-6 rounded-2xl border-orange-700 flex flex-col">
            <h1 className="font-bold"> Id of post : {post.id}</h1>
            <h1 className="flex-grow text-xl font-bold">Title : {post.title}</h1>
            <Link to={`/post/${post.id}`}> 
            <button className="btn font-bold">Show Details</button>
            </Link>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired
}

export default Post;
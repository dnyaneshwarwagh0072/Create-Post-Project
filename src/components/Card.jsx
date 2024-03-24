import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/Post_list_store";

const Card = ({ post }) => {
    const { deletePost } = useContext(PostListContext);
    // console.log(deletePost);
    return (
        <>
            <div className="col-sm-6 mb-3 mb-sm-0 ">
                <div className="card post-css">
                    <div className="card-body">
                        <h5 className="card-title">
                            {post.title}
                            <span onClick={() => deletePost(post.id)} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                <MdDelete />
                            </span>
                        </h5>
                        <p className="card-text">{post.body}</p>
                        {post.tags.map((tag, idx) =>
                            <span key={idx} className="badge text-bg-primary hashtag-css">{tag}</span>
                        )}
                        <div className="alert alert-primary alert-css" role="alert">
                            This post is reacted by {post.reactions} peoples.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;





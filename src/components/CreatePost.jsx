import { useContext, useRef } from "react";
import { PostListContext } from '../store/Post_list_store';

const CreatePost = () => {

    const { addPost } = useContext(PostListContext);
    // console.log(addPost);

    const userIdElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();

    const addPostHandler = (event) => {
        event.preventDefault();
        const userId = userIdElement.current.value;
        const title = postTitleElement.current.value;
        const body = postBodyElement.current.value;
        const reactions = reactionsElement.current.value;
        const tags = tagsElement.current.value.split(" ");

        addPost(userId, title, body, reactions, tags);

        userIdElement.current.value = "";
        postTitleElement.current.value = "";
        postBodyElement.current.value = "";
        reactionsElement.current.value = "";
        tagsElement.current.value = "";
    }

    return (
        <>
            <form className="create-post" onSubmit={addPostHandler}>
                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">Enter Your user Id</label>
                    <input
                        type="text"
                        ref={userIdElement}
                        className="form-control"
                        id="userId"
                        placeholder="Your user Id" />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Post Title</label>
                    <input
                        type="text"
                        ref={postTitleElement}
                        className="form-control"
                        id="title"
                        placeholder="How are you feeling Today" />
                </div>
                <div className="mb-3">
                    <label htmlFor="reactions" className="form-label">Number of Reactions</label>
                    <input
                        type="text"
                        rows="4"
                        ref={reactionsElement}
                        className="form-control"
                        id="reactions"
                        placeholder="How many reactions on this Post" />
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Enter your tags here</label>
                    <input
                        type="text" rows="4"
                        ref={tagsElement}
                        className="form-control"
                        id="tags"
                        placeholder="Please enter your tag here" />
                </div>
                <div className="mb-3">
                    <label htmlFor="body" className="form-label">Post Content</label>
                    <textarea
                        type="text"
                        ref={postBodyElement}
                        rows="4" className="form-control"
                        id="body"
                        placeholder="Tell us about it" />
                </div>
                <button type="submit" className="btn btn-primary">Post</button>
            </form>
        </>
    )
}

export default CreatePost;








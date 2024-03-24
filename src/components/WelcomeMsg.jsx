const WelcomeMsg = ({ getPostList }) => {

    return (
        <div className="msg-container msg-css">
            <h2 className="">There are no Posts</h2>
            <button onClick={getPostList} type="button" className="btn btn-primary">GET SOME POSTS</button>
        </div>
    )
}
export default WelcomeMsg;

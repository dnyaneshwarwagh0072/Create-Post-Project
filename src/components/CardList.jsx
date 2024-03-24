import { useContext } from "react";
import Card from "./Card";
import { PostListContext } from "../store/Post_list_store";
import WelcomeMsg from "./WelcomeMsg";

const CardList = () => {
    const { postList, addInitialPosts } = useContext(PostListContext);

    const handleGetPostList = () => {
        fetch('https://dummyjson.com/posts')
            .then((res) => res.json())
            .then((data) => addInitialPosts(data.posts));
    }

    return (
        <>
            {postList.length === 0 && (
                <WelcomeMsg getPostList={handleGetPostList} />
            )}
            {postList.map((post) => (
                <Card key={post.id} post={post} />
            ))}
        </>
    )
}

export default CardList;


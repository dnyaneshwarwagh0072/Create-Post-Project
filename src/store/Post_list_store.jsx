import { createContext, useReducer } from "react";

export const PostListContext = createContext({
    postList: [],
    addPost: () => { },
    addInitialPosts: () => { },
    deletePost: () => { }
});

const postListReducer = (currPostList, action) => {
    // console.log(currPostList);
    let newPostList = currPostList;
    if (action.type === "DELETE_POST") {
        newPostList = currPostList.filter(e => e.id !== action.payload.postID);
    } else if (action.type === "ADD_INITIAL_POSTS") {
        newPostList = action.payload.posts;
    } else if (action.type === "ADD_POST") {
        newPostList = [action.payload, ...currPostList];
    }
    return newPostList;
}

const Post_list_store = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, [] );

    const addPost = (userId, title, body, reactions, tags) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: Date.now(),
                title: title,
                body: body,
                reactions: reactions,
                userId: userId,
                tags: tags
            }
        })
    };

    const addInitialPosts = (posts) => {
        dispatchPostList({
            type: "ADD_INITIAL_POSTS",
            payload: {
                posts
            }
        })
    }

    const deletePost = (postID) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postID
            }
        });
    };

    return (
        <PostListContext.Provider value={{ postList, addPost, addInitialPosts, deletePost }}>
            {children}
        </PostListContext.Provider>
    );
}

export { Post_list_store };



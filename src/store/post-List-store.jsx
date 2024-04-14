import { createContext, useReducer, useState, useEffect } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  Fetching: false,
  deletePost: () => {},
});

function postListReducer(currPostList, action) {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }

  return newPostList;
}

function PostListProvider({ children }) {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const [Fetching, setFetching] = useState(false);

  function addPost(post) {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  }

  function addInitialPosts(posts) {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  }

  function deletePost(postId) {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  }

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();

    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostList.Provider value={{ postList, Fetching, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
}

export default PostListProvider;

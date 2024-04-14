import { PostList as PostListData } from "../store/post-List-store";
import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";
function PostList() {
  const { postList, Fetching } = useContext(PostListData);

  return (
    <>
      {Fetching && <LoadingSpinner />}

      {!Fetching && postList.length === 0 && <WelcomeMsg />}
      {!Fetching &&
        postList.map((post) => <Post key={post.id} post={post}></Post>)}
      {/* <Post></Post>
      <Post></Post>
      <Post></Post> */}
    </>
  );
}

export default PostList;

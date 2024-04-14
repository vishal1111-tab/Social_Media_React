import React from "react";
import { useRef } from "react";
import { PostList } from "../store/post-List-store";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// import { Form, Navigate, redirect } from "react-router-dom";

import { useEffect } from "react";
function CreatePost() {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagElement = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const useId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tag = tagElement.current.value.split(" ");
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    reactionsElement.current.value = "";
    tagElement.current.value = "";
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        userId: useId,
        body: postBody,
        reactions: reactions,
        tags: tag,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
        console.log(post);
        navigate("/");
      });
  }

  return (
    <form className="create-post " onSubmit={handleSubmit}>
      {/* <Form method="POST" className="create-post "> */}
      <div className="mb-3">
        <label htmlFor="userId" className="form-label ">
          <h3>Enter Your Id Here</h3>
        </label>
        <input
          type="text"
          ref={userIdElement}
          name="userId"
          rows="4"
          placeholder="Your User Id"
          className="form-control"
          id="userId"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          <h4>Post Title</h4>
        </label>
        <input
          type="text"
          name="title"
          ref={postTitleElement}
          placeholder="How are you feel today ..."
          className="form-control"
          id="title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          <h4>Post Content</h4>
        </label>
        <textarea
          type="text"
          name=" body"
          ref={postBodyElement}
          rows="4"
          placeholder="Tell Us More About it."
          className="form-control"
          id="body"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          <h4>Number of reactions</h4>
        </label>
        <input
          type="text"
          name=" reactions"
          ref={reactionsElement}
          placeholder="How many people reacted to this post"
          className="form-control"
          id="reactions"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          <h4> Hashtags </h4>
        </label>
        <input
          type="text"
          name="tags"
          ref={tagElement}
          placeholder="Please enter tags using space"
          className="form-control"
          id="reactions"
        />
      </div>
      <button type="submit" className="btn btn-primary butt">
        Post
      </button>
    </form>
  );
}

// export async function createPostAction(data) {
//   const formData = await data.request.formData(); // data.request.formData ek async method isliye async await ka use kiya
//   const postData = Object.fromEntries(formData);
//   postData.tags = postData.tags.split(" ");
//   fetch("https://dummyjson.com/posts/add", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(postData),
//   })
//     .then((res) => res.json())
//     .then((post) => {
//       addPost(post);
//     });
//   return redirect("/");
// }

export default CreatePost;

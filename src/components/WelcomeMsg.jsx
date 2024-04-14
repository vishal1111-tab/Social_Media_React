import React from "react";

function WelcomeMsg() {
  return (
    <center className="welcome_msg">
      <h1>There Are No Posts ❎</h1>
      {/* <button
        onClick={onGetPostsClick}
        style={{ marginTop: "30px" }}
        type="button"
        className="btn btn-danger"
      >
        Get Posts From Server ⬇️
      </button> */}
    </center>
  );
}

export default WelcomeMsg;

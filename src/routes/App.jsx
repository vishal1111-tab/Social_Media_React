import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Side_Bar from "../components/Side_Bar";
import Footer from "../components/Footer";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";
import { useState } from "react";
import PostListProvider from "../store/post-List-store";
import SignUp from "../components/SignUp";
import { Outlet } from "react-router-dom";
function App() {
  const [selectedtab, setSelsectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Side_Bar></Side_Bar>

        <div className="content">
          <Header setSelsectedTab={setSelsectedTab}></Header>
          {/* {selectedtab === "Home" && <PostList></PostList>}
          {selectedtab === "Create Post" && <CreatePost></CreatePost>}
          {selectedtab === "Sign in" && <SignUp></SignUp>} */}
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;

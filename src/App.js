import React, { Component } from "react";
import Posts from "./components/Posts";
import PostForm from "./components/Postform";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm />
        <hr />
        <Posts />
      </div>
    );
  }
}

export default App;
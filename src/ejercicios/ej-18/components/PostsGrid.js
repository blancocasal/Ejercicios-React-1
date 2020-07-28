import React, { useEffect, useState } from "react";
import Post from "./Post";
import PostContext from "./PostContext";
import { Toast, ToastBody, ToastHeader, Spinner, Button } from "reactstrap";

const PostsGrid = () => {
  // Create States
  const [post, setPost] = useState();

  // Consult API Posts Async Await
  const getPostApi = async () => {
    const resultApi = await fetch("https://jsonplaceholder.typicode.com/posts");
    const resultJsonApi = await resultApi.json();
    setPost(resultJsonApi);
  };

  // UseEffect para lanzar la consulta a las APIs sólo cuando el Estado se encuentre vacío.
  useEffect(() => {
    getPostApi();
  }, []);
  console.log(post);

  return (
    <PostContext.Provider value={post}>
      {post
        ? post.map((value) => <Post id={value.id} body={value.body} />)
        : "Cargando"}
    </PostContext.Provider>
  );
};

export default PostsGrid;

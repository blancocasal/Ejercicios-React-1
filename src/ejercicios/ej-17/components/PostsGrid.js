import React, { useContext } from "react";
import postGrid from "../style/postGrid.css";
import { UserContext, UserPost } from "../App";
import BlockPost from "./BlockPost";

const PostGrid = () => {
  const user = useContext(UserContext);
  const post = useContext(UserPost);

  return (
    <div className="d-flex justify-content-center">
      <div>
        <h3>Posts Grid</h3>
        {user ? <BlockPost user={user} post={post} /> : <p>cargando</p>}
      </div>
    </div>
  );
};
export default PostGrid;

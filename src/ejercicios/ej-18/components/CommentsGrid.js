import React, { useState } from "react";

const CommentsGrid = () => {
  const [comments, setComments] = useState();

  // Consult API Comments Async Await
  const getCommentsApi = async () => {
    const resultApi = await fetch(
      "https://jsonplaceholder.typicode.com/comments?postId=1"
    );
    const resultJsonApi = await resultApi.json();
    setComments(resultJsonApi);
  };
  return <div>Comments Grid</div>;
};

export default CommentsGrid;

import React, { useContext } from "react";
import PostContext from "./PostContext";
import { Toast, ToastBody, ToastHeader, Spinner, Button } from "reactstrap";

const Post = (props) => {
  const post = useContext(PostContext);

  return (
    <Toast className="my-3">
      <ToastHeader icon={<Spinner size="sm" />}>
        Post Número: {props.id}
      </ToastHeader>
      <ToastBody>{props.body}</ToastBody>
      <Button outline color="danger" size="sm" className="mx-2 mb-2">
        Comments
      </Button>
    </Toast>
  );
};

//

export default Post;

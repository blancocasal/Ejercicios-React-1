import React, { useContext } from "react";
import blockPost from "../style/blockPost.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import UserContext from "../App";

const BlockPost = (props) => {
  const usersResult = props.user;
  const postsResult = props.post;
  console.log(postsResult);
  console.log(usersResult);

  const resultMap = postsResult.map((post) => (
    <Row>
      <Col sm="3">
        Email: {usersResult.find((user) => post.userId === user.id).email}
      </Col>

      <Col sm="9">{post.body}</Col>
    </Row>
  ));

  return <Row className="blockPost">{resultMap}</Row>;
};

export default BlockPost;

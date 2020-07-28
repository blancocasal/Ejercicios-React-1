import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PostGrid from "./components/PostsGrid";
import CommentsGrid from "./components/CommentsGrid";

const App = () => {
  return (
    <div>
      <Container>
        <Row className="my-5 ">
          <Col className="border">
            <PostGrid />
          </Col>
          <Col className="border">
            <CommentsGrid />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;

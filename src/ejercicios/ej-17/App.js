import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PostsGrid from "./components/PostsGrid";
import BlockPost from "./components/BlockPost";

export const UserContext = React.createContext();
export const UserPost = React.createContext();

const App = () => {
  const [user, setUser] = useState();
  const [post, setPost] = useState();

  useEffect(() => {
    // Ejecuta la función de coger los Post si el estado es vacío.
    takePost();
    takeUser();
  }, []);

  const takePost = async () => {
    const takeObject = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const result = await takeObject.json();
    setPost(result);
  };

  const takeUser = async () => {
    const takeObject = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const result = await takeObject.json();
    setUser(result);
    console.log(result);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <UserContext.Provider value={user}>
              <UserPost.Provider value={post}>
                <PostsGrid></PostsGrid>
              </UserPost.Provider>
            </UserContext.Provider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;

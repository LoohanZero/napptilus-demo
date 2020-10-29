import React from "react";
import Container from "../components/primitive/Container";
import Heading from "../components/primitive/Heading";
import Text from "../components/primitive/Text";
import Input from "../components/primitive/Input";

const Home = () => {
  return (
    <Container as="main">
      <Input />
      <Heading>Find your Oompa Loompa</Heading>
      <Text>There are more than 100k</Text>
    </Container>
  );
};

export default Home;

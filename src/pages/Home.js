import React from "react";
import Container from "../components/primitive/Container";
import Heading from "../components/primitive/Heading";
import Search from "../components/Search";
import Text from "../components/primitive/Text";
import style from "../styles/pages/home.module.css";

const Home = () => {
  return (
    <Container as="main" className={style["home-container"]}>
      <Search />
      <Heading className={style.title} >Find your Oompa Loompa</Heading>
      <Text className={style.subtitle} >There are more than 100k</Text>
      <Container></Container>
    </Container>
  );
};

export default Home;

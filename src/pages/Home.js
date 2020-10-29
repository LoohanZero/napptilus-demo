import React from "react";
import Container from "../components/primitive/Container";
import Heading from "../components/primitive/Heading";
import Image from "../components/primitive/Image";
import Input from "../components/primitive/Input";
import Text from "../components/primitive/Text";

import searchIcon from "../imgs/ic_search.png";

import style from "../styles/pages/home.module.css";

const Home = () => {
  return (
    <Container as="main" className={style["home-container"]}>
      <Container className={style["home-search-container"]}>
        <Input className={style["home-search-input"]} placeholder="Search" />
        <Image className={style} scr={searchIcon} />
      </Container>

      <Heading>Find your Oompa Loompa</Heading>
      <Text>There are more than 100k</Text>
      <Container></Container>
    </Container>
  );
};

export default Home;

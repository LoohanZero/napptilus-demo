import React from "react";
import { Link } from "react-router-dom";
import Container from "./primitive/Container";
import Text from "./primitive/Text";
import Image from "./primitive/Image";
import oompa from "../imgs/logo-umpa-loompa.png";
import style from "../styles/components/header.module.css";

const Header = () => {
  return (
    <Container as="header" className={style.header}>
      <Container as="nav">
        <Link to="/">
          <Image src={oompa} className={style["nav-icon"]} />
        </Link>
        <Text>Oompa Loompa's Crew</Text>
      </Container>
    </Container>
  );
};

export default Header;

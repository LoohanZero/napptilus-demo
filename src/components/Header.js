import React from "react";
import { NavLink } from "react-router-dom";
import Container from "./primitive/Container";
import Text from "./primitive/Text";
import Image from "./primitive/Image";
import oompaIcon from "../imgs/logo-umpa-loompa.png";
import style from "../styles/components/header.module.css";

const Header = () => {
  return (
    <Container as="header" className={style.header}>
      <Container as="nav" className={style.nav}>
        <NavLink to="/">
          <Image src={oompaIcon} className={style["nav-icon"]} />
        </NavLink>
        <Text className={style["nav-description"]}>Oompa Loompa's Crew</Text>
      </Container>
    </Container>
  );
};

export default Header;

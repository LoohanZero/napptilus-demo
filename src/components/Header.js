import React from "react";
import { NavLink } from "react-router-dom";
import Container from "./primitive/Container";
import Heading from "./primitive/Heading";
import Image from "./primitive/Image";
import oompaIcon from "../imgs/logo-umpa-loompa.png";
import style from "../styles/components/header.module.css";

const Header = () => {
  return (
    <Container as="header" className={style.header}>
      <Container as="nav" className={style.nav}>
        <NavLink to="/">
          <Image src={oompaIcon} className={style.navIcon} />
        </NavLink>
        <Heading className={style.navDescription}>
          Oompa Loompa's Crew
        </Heading>
      </Container>
    </Container>
  );
};

export default Header;

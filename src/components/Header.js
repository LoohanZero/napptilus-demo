import React from "react";
import { Link } from "react-router-dom";
import Container from "./primitive/Container";
import Text from "./primitive/Text";
import Oompa from "../imgs/logo-umpa-loompa.png";

const Header = () => {
  return (
    <Container as="header">
      <Container as="nav">
        <Link>
          <Oompa />
        </Link>
        <Text>Oompa Loompa's Crew</Text>
      </Container>
    </Container>
  );
};

export default Header;

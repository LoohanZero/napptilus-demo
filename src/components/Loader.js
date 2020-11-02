import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import { css } from "@emotion/core";

import Container from "./primitive/Container";

import style from "../styles/components/loader.module.css";

const Loader = () => {
  return (
    <Container className={style.loaderContainer}>
      <PacmanLoader color="gray" size="40px" />
    </Container>
  );
};

export default Loader;

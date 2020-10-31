import React from "react";
import Container from "../components/primitive/Container";
import Image from "./primitive/Image";
import Input from "./primitive/Input";
import searchIcon from "../imgs/ic_search.png";
import style from "../styles/components/search.module.css";

const Search = ({ searchFunction, inputValue }) => {
  return (
    <Container className={style.searchContainer}>
      <Input
        onChange={searchFunction}
        className={style.searchInput}
        value={inputValue}
      />
      <Image className={style.searchIcon} src={searchIcon} />
    </Container>
  );
};

export default Search;

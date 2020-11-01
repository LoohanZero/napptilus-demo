import React from "react";

import Container from "../components/primitive/Container";
import Image from "./primitive/Image";
import Input from "./primitive/Input";

import searchIcon from "../imgs/ic_search.png";

import style from "../styles/components/search.module.css";

const Search = ({ onSearch, inputValue, placeholder }) => {
  return (
    <Container className={style.searchContainer}>
      <Input
        onChange={(event) => onSearch(event.target.value)}
        className={style.searchInput}
        value={inputValue}
        placeholder={placeholder}
      />
      <Image className={style.searchIcon} src={searchIcon} />
    </Container>
  );
};

export default Search;

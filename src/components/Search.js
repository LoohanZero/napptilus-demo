import React from "react";
import Container from "../components/primitive/Container";
import Image from "./primitive/Image";
import Input from "./primitive/Input";
import searchIcon from "../imgs/ic_search.png";
import style from "../styles/components/search.module.css";

const Search = ({ searchFunction, inputValue }) => {
 
  return (
    <Container className={style["search-container"]}>
      <Input
        onChange={searchFunction}
        className={style["search-input"]}
        value={inputValue}
      />
      <Image className={style["search-icon"]} src={searchIcon} />
    </Container>
  );
};

export default Search;

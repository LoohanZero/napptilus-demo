import React, { useState } from "react";
import Container from "../components/primitive/Container";
import Image from "./primitive/Image";
import Input from "./primitive/Input";
import searchIcon from "../imgs/ic_search.png";
import style from "../styles/components/search.module.css";

const Search = () => {
  const [inputValue, setInputValue] = useState("Search");
  return (
    <Container className={style["search-container"]}>
      <Input className={style["search-input"]} value={inputValue} />
      <Image className={style["search-icon"]} src={searchIcon} />
    </Container>
  );
};

export default Search;

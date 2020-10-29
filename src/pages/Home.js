import React, { useState, useEffect } from "react";
import Container from "../components/primitive/Container";
import Heading from "../components/primitive/Heading";
import Search from "../components/Search";
import Text from "../components/primitive/Text";
import Card from "../components/Card";
import style from "../styles/pages/home.module.css";

const Home = () => {
  const [oompas, setOompas] = useState([]);
  const [page, setPage] = useState(1);
  const [isBottom, setIsBottom] = useState(false);
  const [inputValue, setInputValue] = useState("Search");

  const handleSearch = (event) => {
    setInputValue(event.target.value);
  };

  const handleScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;

    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;

    if (scrollTop + window.innerHeight + 150 >= scrollHeight) {
      setIsBottom(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isBottom) {
      setPage(page + 1);
    }

    const getOompas = async () => {
      try {
        const response = await fetch(
          `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=${page}`
        );
        const data = await response.json();

        setOompas([...oompas, ...data.results]);
        setIsBottom(false);
      } catch {}
    };
    getOompas();
  }, [isBottom]);

  return (
    <Container as="main" className={style["home-container"]}>
      <Search searchFunction={handleSearch} value={inputValue} />
      <Heading className={style.title}>Find your Oompa Loompa</Heading>
      <Text className={style.subtitle}>There are more than 100k</Text>
      <Container className={style["cards-container"]}>
        {oompas.length > 1 &&
          oompas.map((oompa) => (
            <Card
              id={oompa.id}
              src={oompa.image}
              firstName={oompa.first_name}
              lastName={oompa.last_name}
              gender={oompa.gender}
              profession={oompa.profession}
            />
          ))}
      </Container>
    </Container>
  );
};

export default Home;

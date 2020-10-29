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

  useEffect(() => {
    const getOompas = async () => {
      try {
        const response = await fetch(
          `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=${page}`
        );
        const data = await response.json();
        setOompas(data.results);
      } catch {}
    };
    getOompas();
  }, [page]);
  return (
    <Container as="main" className={style["home-container"]}>
      <Search />
      <Heading className={style.title}>Find your Oompa Loompa</Heading>
      <Text className={style.subtitle}>There are more than 100k</Text>
      <Container>
        {oompas &&
          oompas.map((oompa) => (
            <Card
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

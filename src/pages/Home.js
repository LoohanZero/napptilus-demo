import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Container from "../components/primitive/Container";
import Heading from "../components/primitive/Heading";
import Search from "../components/Search";
import Text from "../components/primitive/Text";
import Card from "../components/Card";
import style from "../styles/pages/home.module.css";
import useCheckScroll from "../hooks/useCheckScroll";
import useCheckLocalStorage from "../hooks/useCheckLocalStorage";

const Home = () => {
  const [oompas, setOompas] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [isBottom, setIsBottom] = useCheckScroll();
  const [saveInNav, checkTimeStorage] = useCheckLocalStorage();
  
  const history = useHistory();

  const handleDetailsClick = (id) => {
    history.push(`/${id}`);
  };

  const getOompas = async () => {
    fetch(
      `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        setOompas([...oompas, ...data.results]);
        setIsBottom(false);
        setPage(page + 1);

        const datatoday = new Date();
        const datatodays = datatoday.setDate(new Date(datatoday).getDate() + 1);
        const todate = new Date(datatodays);
        const expDate = todate.toString();

        const toStorage = {
          expirationDate: expDate,
          oompas: [...oompas, ...data.results],
        };
        saveInNav.setItem("data", JSON.stringify(toStorage));
      });
  };

  useEffect(() => {
    if (saveInNav.getItem("data") && !isBottom) {
      const data = JSON.parse(saveInNav.getItem("data"));
      setOompas(data.oompas);
      checkTimeStorage(data.expirationDate);
    } else {
      getOompas();
    }
  }, [isBottom]);

  const isSearched = (oompa) => {
    return (
      search.toLocaleLowerCase() === "" ||
      oompa.first_name.toLowerCase().includes(search) ||
      oompa.last_name.toLowerCase().includes(search) ||
      oompa.profession.toLowerCase().includes(search)
    );
  };

  return (
    <Container as="main" className={style.homeContainer}>
      <Search
        searchFunction={(event) => setSearch(event.target.value)}
        value={search}
      />
      <Heading className={style.title}>Find your Oompa Loompa</Heading>
      <Text className={style.subtitle}>There are more than 100k</Text>
      <Container className={style.cardsContainer}>
        {oompas.length > 1 &&
          oompas
            .filter(isSearched)
            .map((oompa) => (
              <Card
                id={oompa.id}
                cardKey={oompa.id}
                src={oompa.image}
                firstName={oompa.first_name}
                lastName={oompa.last_name}
                gender={oompa.gender}
                profession={oompa.profession}
                functionClick={() => handleDetailsClick(oompa.id)}
              />
            ))}
      </Container>
    </Container>
  );
};

export default Home;

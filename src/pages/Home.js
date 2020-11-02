import React, { useState, useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";

import Container from "../components/primitive/Container";
import Heading from "../components/primitive/Heading";
import Search from "../components/Search";
import Text from "../components/primitive/Text";
import Card from "../components/Card";
import Loader from "../components/Loader";

import useCheckScroll from "../hooks/useCheckScroll";
import useLocalStorage from "../hooks/useLocalStorage";

import style from "../styles/pages/home.module.css";

const Home = () => {
  const [oompas, setOompas] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [isBottom, setIsBottom] = useCheckScroll();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    getData,
    checkTimeStorage,
    saveOompasToLocalStorage,
  } = useLocalStorage();
  const history = useHistory();

  const handleOompaDetails = (id) => {
    history.push(`/${id}`);
  };

  const getOompas = (page) => {
    fetch(
      `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(true);
        data.errorMessage
          ? setError(true)
          : setOompas([...oompas, ...data.results]);
        setIsBottom(false);
        saveOompasToLocalStorage(oompas, data, page + 1);
        setPage(page + 1);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const localOompas = getData().oompas;

    if (
      !localOompas ||
      checkTimeStorage(localOompas?.expirationDate) ||
      isBottom
    ) {
      getOompas(page);
    } else {
      setOompas(localOompas.data);
      setPage(localOompas.page);
    }
  }, [isBottom]);

  const isSearched = (oompa) => {
    const toSearch = oompa.first_name + oompa.last_name + oompa.profession;
    const regexp = new RegExp(search, "i");

    return regexp.test(toSearch);
  };

  return (
    <>
      {isLoading && <Loader />}
      {error && <Redirect exact to="/error" />}
      {oompas && !error && (
        <Container as="main" className={style.homeContainer}>
          <Search onSearch={setSearch} value={search} />
          <Heading className={style.title}>Find your Oompa Loompa</Heading>
          <Text className={style.subtitle}>There are more than 100k</Text>
          <Container className={style.cardsContainer}>
            {oompas.length > 1 &&
              oompas
                .filter(isSearched)
                .map((oompa) => (
                  <Card
                    id={oompa.id}
                    key={oompa.id}
                    src={oompa.image}
                    firstName={oompa.first_name}
                    lastName={oompa.last_name}
                    gender={oompa.gender}
                    profession={oompa.profession}
                    onSelect={(event) =>
                      (event.key === "Enter" || event.type === "click") &&
                      handleOompaDetails(oompa.id)
                    }
                  />
                ))}
          </Container>
        </Container>
      )}
    </>
  );
};

export default Home;

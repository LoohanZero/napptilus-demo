import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import Interweave from "interweave";

import Container from "../components/primitive/Container";
import Heading from "../components/primitive/Heading";
import Image from "../components/primitive/Image";
import Span from "../components/primitive/Span";
import Text from "../components/primitive/Text";
import ScrollToTop from "../components/ScrollToTop";
import Loader from "../components/Loader";

import useLocalStorage from "../hooks/useLocalStorage";

import style from "../styles/pages/details.module.css";

const GENDER = {
  F: "Woman",
  M: "Man",
};

const Details = () => {
  const [oompa, setOompa] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const {
    getData,
    checkTimeStorage,
    saveOompaToLocalStorage,
  } = useLocalStorage();

  const getOompa = () => {
    setIsLoading(true);

    fetch(
      `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.errorMessage) {
          setError(true);
        } else {
          setOompa(data);
          saveOompaToLocalStorage(data, id);
          setIsLoading(false);
        }
      });
  };

  useEffect(() => {
    if (isNaN(id)) {
      setError(true);
    }

    const localOompa = getData().oompa;

    if (
      !localOompa?.expDate ||
      checkTimeStorage(localOompa?.expDate) ||
      !localOompa.data.find((oompa) => oompa.id === id)
    ) {
      getOompa();
    } else {
      const selectedOompa = localOompa.data.find((oompa) => oompa.id === id);
      setOompa(selectedOompa);
    }
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <Redirect exact to="/error" />}
      {oompa && !error && !isLoading && (
        <>
          <ScrollToTop />
          <Container as="section" id={id} className={style.detailsContainer}>
            <Container className={style.oompaContainer}>
              <Container className={style.imageContainer}>
                <Image className={style.detailsImage} src={oompa.image} />
              </Container>

              <Container className={style.descriptionContainer}>
                <Container className={style.nameContainer}>
                  <Heading className={style.name}>
                    <Span>{oompa.first_name}</Span>
                    <Span>{oompa.last_name}</Span>
                  </Heading>
                  <Text className={style.gender}>{GENDER[oompa.gender]}</Text>
                  <Text className={style.profession}>{oompa.profession}</Text>
                </Container>
                <Interweave
                  className={style.description}
                  content={oompa.description}
                />
              </Container>
            </Container>
          </Container>
        </>
      )}
    </>
  );
};

export default Details;

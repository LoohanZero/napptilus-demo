import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/primitive/Container";
import Heading from "../components/primitive/Heading";
import Image from "../components/primitive/Image";
import Span from "../components/primitive/Span";
import Text from "../components/primitive/Text";
import style from "../styles/pages/details.module.css";

const Details = () => {
  const [oompa, setOompa] = useState([]);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getOompa = async () => {
      try {
        const response = await fetch(
          `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/${id}`
        );
        const data = await response.json();

        setOompa(data);
      } catch (error) {
        const errorInfo = new Error(error);
        setError(errorInfo.message);
      }
    };
    getOompa();
  }, [id]);

  return (
    <Container as="section" id={id} className={style["details-container"]}>
      <Container className={style["image-container"]}>
        <Image className={style["details-image"]} src={oompa.image} />
      </Container>

      <Container className={style["description-container"]}>
        <Container className={style["name-container"]}>
          <Heading className={style.name}>
            <Span>{oompa.first_name}</Span>
            <Span>{oompa.last_name}</Span>
          </Heading>
          <Text className={style.gender}>{oompa.gender === "F" ? "Woman" : "Man"}</Text>
          <Text className={style.profession}>{oompa.profession}</Text>
        </Container>
        <Text className={style.description} >{oompa.description}</Text>
      </Container>
    </Container>
  );
};

export default Details;

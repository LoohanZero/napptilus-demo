import React from "react";
import Container from "./primitive/Container";
import Heading from "./primitive/Heading";
import Image from "./primitive/Image";
import Span from "./primitive/Span";
import Text from "./primitive/Text";
import style from "../styles/components/card.module.css";

const GENDER = {
  F: "Woman",
  M: "Man",
};

const Card = ({
  id,
  cardKey,
  src,
  firstName,
  lastName,
  gender,
  profession,
  functionClick,
}) => {
  return (
    <Container
      id={id}
      key={cardKey}
      as="article"
      className={style.cardContainer}
      onClick={functionClick}
    >
      <Container className={style.imageContainer}>
        <Image src={src} className={style.cardImage} />
      </Container>
      <Heading level={2} className={style.name}>
        <Span>{firstName}</Span>
        <Span> {lastName}</Span>
      </Heading>
      <Text className={style.description}>{GENDER[gender]}</Text>
      <Text className={style.description}>{profession}</Text>
    </Container>
  );
};

export default Card;

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
  src,
  firstName,
  lastName,
  gender,
  profession,
  functionClick,
}) => {
  return (
    <Container
      tabIndex="0"
      id={id}
      as="article"
      className={style.cardContainer}
      onClick={functionClick}
      onKeyDown={functionClick}
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

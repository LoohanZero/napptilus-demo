import React from "react";
import Container from "./primitive/Container";
import Heading from "./primitive/Heading";
import Image from "./primitive/Image";
import Span from "./primitive/Span";
import Text from "./primitive/Text";
import style from "../styles/components/card.module.css";

const Card = ({ id, src, firstName, lastName, gender, profession }) => {
  const oompaGender = gender === "F" ? "Woman" : "Man";

  return (
    <Container id={id} as="article" className={style["card-container"]}>
      <Container className={style["image-container"]}>
        <Image src={src} className={style["card-image"]} />
      </Container>
      <Heading level={2} className={style.name}>
        <Span>{firstName}</Span>
        <Span> {lastName}</Span>
      </Heading>
      <Text className={style.description}>{oompaGender}</Text>
      <Text className={style.description}>{profession}</Text>
    </Container>
  );
};

export default Card;

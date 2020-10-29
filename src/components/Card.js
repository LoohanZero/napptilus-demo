import React from "react";
import Container from "./primitive/Container";
import Heading from "./primitive/Heading";
import Image from "./primitive/Image";
import Span from "./primitive/Span";
import Text from "./primitive/Text";
import style from "../styles/components/card.module.css";

const Card = ({ src, firstName, lastName, gender, profession }) => {
  const oompaGender = gender === "F" ? "Female" : "Male";
  return (
    <Container as="article" className={style["card-container"]}>
      <Container className={style["image-container"]}>
        <Image src={src} className={style["card-image"]} />
      </Container>
      <Heading level={2} className={style}>
        <Span>{firstName}</Span>
        <Span> {lastName}</Span>
      </Heading>
      <Text className={style}>{oompaGender}</Text>
      <Text className={style}>{profession}</Text>
    </Container>
  );
};

export default Card;

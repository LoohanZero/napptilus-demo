import React from "react";
import Container from "./primitive/Container";
import Heading from "./primitive/Heading";
import Image from "./primitive/Image";
import Text from "./primitive/Text";

const Card = ({ src, firstName, lastName, gender, profession }) => {
  console.log(src);
  const oompaGender = gender === "F" ? "Female" : "Male";
  return (
    <Container as="article">
      <Image src={src} />
      <Heading level={2}>
        {firstName}
        {lastName}
      </Heading>
      <Text>{oompaGender}</Text>
      <Text>{profession}</Text>
    </Container>
  );
};

export default Card;

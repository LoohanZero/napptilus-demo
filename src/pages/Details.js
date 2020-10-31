import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dompurify from "dompurify";
import Container from "../components/primitive/Container";
import Heading from "../components/primitive/Heading";
import Image from "../components/primitive/Image";
import Span from "../components/primitive/Span";
import Text from "../components/primitive/Text";
import ScrollToTop from "../components/ScrollToTop";
import style from "../styles/pages/details.module.css";

const Details = () => {
  const [oompa, setOompa] = useState([]);
  const { id } = useParams();
  const createMarkup = (description) => {
    const sanitizer = dompurify.sanitize;
    return { __html: sanitizer(description) };
  };

  useEffect(() => {
    const getOompa = async () => {
      fetch(
        `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/${id}`
      )
        .then((response) => response.json())
        .then((data) => setOompa(data));
    };
    getOompa();
  }, [id]);

  return (
    oompa && (
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
                <Text className={style.gender}>
                  {oompa.gender === "F" && "Woman"}
                  {oompa.gender === "M" && "Man"}
                </Text>
                <Text className={style.profession}>{oompa.profession}</Text>
              </Container>

              {oompa.description && !oompa.description.includes("<") ? (
                <Text className={style.description}>{oompa.description}</Text>
              ) : (
                <Container
                  className={style.description}
                  dangerouslySetInnerHTML={createMarkup(oompa.description)}
                />
              )}
            </Container>
          </Container>
        </Container>
      </>
    )
  );
};

export default Details;

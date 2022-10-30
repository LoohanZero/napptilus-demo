import { useReducer, useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";

import Container from "../components/primitive/Container";
import Heading from "../components/primitive/Heading";
import Search from "../components/Search";
import Text from "../components/primitive/Text";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { 
  initialState, 
  oompaStateReducer,
  handleScroll, 
  handleOompaDetails, 
  getOompas, 
  searchOompa
} from '../helpers/home';

import useLocalStorage from "../hooks/useLocalStorage";

import style from "../styles/pages/home.module.css";

const Home = () => {
  const [oompaState, dispatchOompaState] = useReducer(oompaStateReducer, initialState)
  const {oompas, page, search, error, isBottom, isLoading} = oompaState;
  const history = useHistory();
  const { getOompasFromLocalStorage, checkTimeStorage, saveOompasToLocalStorage } = useLocalStorage();

  useEffect(() => {
    const localOompas = getOompasFromLocalStorage();
    const expiredDate = checkTimeStorage(localOompas?.expDate);
    window.addEventListener("scroll", () => handleScroll(dispatchOompaState));

    if (!localOompas?.data || expiredDate) {
      getOompas(page, isBottom, error, dispatchOompaState);
    }

    return () => {
      window.removeEventListener("scroll", () => handleScroll(dispatchOompaState));
      saveOompasToLocalStorage(oompas, page);
    }
  }, []);

  useEffect(() => {
    if (isBottom) {
      getOompas(page, isBottom, error, dispatchOompaState);
    } 
  }, [isBottom]);

  return (
    <>
      {oompas && !error && (
        <Container as="main" className={style.homeContainer}>
          <Search onSearch={dispatchOompaState} value={search} />
          <Heading className={style.title}>Find your Oompa Loompa</Heading>
          <Text className={style.subtitle}>There are more than 100k</Text>
          <Container className={style.cardsContainer}>
            {oompas.length > 1 &&
              oompas
                .filter((oompa) => searchOompa(oompa, search))
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
                      handleOompaDetails(history, oompa.id)
                    }
                  />
                ))}
          </Container>
        </Container>
      )}
      {isLoading && <Loader />}
      {error && <Redirect exact to="/error" />}
    </>
  );
};

export default Home;

const useLocalStorage = () => {
  const localStorage = window.localStorage;

  const getData = () => {
    return JSON.parse(localStorage.getItem("data"));
  };

  const getExpirationDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    return tomorrow.toString();
  };

  const saveOompasToLocalStorage = (oompas, data, page) => {
    let localOompas = getData();
    const storedOompas = localOompas && localOompas.oompas;

    const oompasInfo = {
      oompas: {
        OompasExpirationDate: getExpirationDate(),
        page: page,
        oompas: [...oompas, ...data.results],
      },
    };

    if (!storedOompas) {
      localOompas = { ...oompasInfo };
    } else {
      localOompas = {
        ...localOompas,
        ...oompasInfo,
      };
    }
    localStorage.setItem("data", JSON.stringify(localOompas));
  };

  const saveOompaToLocalStorage = (data, id) => {
    let localOompas = getData();
    const localOompa = localOompas.oompa;
    const newOompa = { ...data, id: id };
    const arrayOompas = localOompa && localOompa.oompa ? localOompa.oompa : [];

    const oompaInfo = {
      oompa: {
        OompaExpirationDate: getExpirationDate(),
        oompa: [...arrayOompas, newOompa],
      },
    };

    if (!localOompas) {
      localOompas = { ...oompaInfo };
    } else if (
      !localOompas.oompa ||
      (localOompa.oompa &&
        localOompa.oompa.filter((oompa) => oompa.id === id).length < 1)
    ) {
      localOompas = {
        ...localOompas,
        ...oompaInfo,
      };
    }
    localStorage.setItem("data", JSON.stringify(localOompas));
  };

  const checkTimeStorage = (date) => {
    if (new Date(date) <= new Date()) {
      console.log("Está borrando el storage");
      localStorage.removeItem("data");
    }
  };

  return {
    getData,
    checkTimeStorage,
    saveOompasToLocalStorage,
    saveOompaToLocalStorage,
  };
};

export default useLocalStorage;

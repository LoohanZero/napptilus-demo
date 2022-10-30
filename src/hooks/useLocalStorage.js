const useLocalStorage = () => {
  const localStorage = window.localStorage;

  const getOompasFromLocalStorage = () => {
    const storedOompas = localStorage.getItem("data");

    if (storedOompas) {
      return JSON.parse(storedOompas);
    } else {
      return {
        oompas: {},
        oompa: {},
      };
    }
  };

  const getExpirationDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    return tomorrow.toString();
  };

  const saveOompasToLocalStorage = (oompas, page) => {
    let localOompas = getOompasFromLocalStorage();
    const oompasInfo = {
      oompas: {
        expDate: getExpirationDate(),
        nextPage: page,
        data: oompas,
      },
    };

    localOompas = {
      ...localOompas,
      ...oompasInfo,
    };

    localStorage.setItem("data", JSON.stringify(localOompas));
  };

  const saveOompaToLocalStorage = (data, id) => {
    let localOompas = getOompasFromLocalStorage();
    const localOompa = localOompas?.oompa;
    const newOompa = { ...data, id: id };
    const arrayOompas = localOompa?.oompa || [];

    const oompaInfo = {
      oompa: {
        expDate: getExpirationDate(),
        data: [...arrayOompas, newOompa],
      },
    };

    if (!localOompa?.data?.find((oompa) => oompa.id === id)) {
      localOompas = {
        ...localOompas,
        ...oompaInfo,
      };
    }
    localStorage.setItem("data", JSON.stringify(localOompas));
  };

  const checkTimeStorage = (date) => {
    if (new Date(date) <= new Date()) {
      console.log('entra al if')
      localStorage.removeItem("data");
      return true;
    }
  };

  return {
    getOompasFromLocalStorage,
    checkTimeStorage,
    saveOompasToLocalStorage,
    saveOompaToLocalStorage,
  };
};

export default useLocalStorage;

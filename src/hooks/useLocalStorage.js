const useLocalStorage = () => {
  const localStorage = window.localStorage;

  const getData = () => {
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

  const saveOompasToLocalStorage = (oompas, data, page) => {
    let localOompas = getData();

    const oompasInfo = {
      oompas: {
        expDate: getExpirationDate(),
        page: page,
        data: [...oompas, ...data.results],
      },
    };

    localOompas = {
      ...localOompas,
      ...oompasInfo,
    };

    localStorage.setItem("data", JSON.stringify(localOompas));
  };

  const saveOompaToLocalStorage = (data, id) => {
    let localOompas = getData();
    const localOompa = localOompas.oompa;
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

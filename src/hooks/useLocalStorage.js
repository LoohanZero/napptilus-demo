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
//SEPARAR LOGICA DE UN OOMPA CON LA DE VARIOS OOMPAS AUNQUE USE EL MISMO OBJETO EN LOCAL STORAGE, LA FUNCIÓN SE ESTÁ HACIENDO DEMASIADO ENGORROSA
  const saveToLocalStorage = (oompas, data, page) => {
    let toStorage = getData();

    const oompasInfo = {
      OompasExpirationDate: getExpirationDate(),
      page: page,
      oompas: [...oompas, data.results],
    };
    const oompaInfo = {
      OompaExpirationDate: getExpirationDate(),
      oompa: [...oompas, data],
    };

    if (toStorage && data.results) {
      console.log("hay storage y son los oompas");
      toStorage = {
        ...toStorage,
        ...oompasInfo,
      };
    } else if (!toStorage && data && data.hasOwnProperty("results")) {
      console.log("no hay storage y  son los oompas ");
      toStorage = { ...oompasInfo };
    } else if (!toStorage && data && !data.hasOwnProperty("results")) {
      console.log("no hay storage y es el oompa ");
      toStorage = { ...oompaInfo };
    } else {
      console.log("hay storage y es el oompa");
      if (toStorage.oompa.includes(data)) {
        toStorage = {
          ...toStorage,
          ...oompaInfo,
        };
      }
    }

    localStorage.setItem("data", JSON.stringify(toStorage));
  };

  const checkTimeStorage = (date) => {
    if (new Date(date) <= new Date()) {
      console.log("Está borrando el storage");
      localStorage.removeItem("data");
    }
  };

  return [getData, checkTimeStorage, saveToLocalStorage];
};

export default useLocalStorage;

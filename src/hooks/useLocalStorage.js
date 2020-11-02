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

  const saveOompasToLocalStorage = (oompas, data, page) => {
    let localOompas = getData();
    const storedOompas = localOompas && localOompas.oompas;
    console.log(localOompas);
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
    let localOompa = getData();
    const newOompa = { ...data, id: id };
    const arrayOompas = localOompa.oompa.oompa ? localOompa.oompa.oompa : [];
    
    const oompaInfo = {
      oompa: {
        OompaExpirationDate: getExpirationDate(),
        oompa: [...arrayOompas, newOompa],
      },
    };

    if (!localOompa) {
      localOompa = { ...oompaInfo };
    } else if (
      !localOompa.oompa ||
      (localOompa.oompa.oompa &&
        localOompa.oompa.oompa.filter((oompa) => oompa.id === id).length < 1)
    ) {
      localOompa = {
        ...localOompa,
        ...oompaInfo,
      };
    }
    localStorage.setItem("data", JSON.stringify(localOompa));
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

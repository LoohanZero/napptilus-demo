const useCheckLocalStorage = () => {
  const saveInNav = window.localStorage;

  const saveToLocalStorage = (oompas, data) => {
    const datatoday = new Date();
    const datatodays = datatoday.setDate(new Date(datatoday).getDate() + 1);
    const todate = new Date(datatodays);
    const expDate = todate.toString();

    const toStorage = {
      expirationDate: expDate,
      oompas: [...oompas, ...data.results],
    };
    saveInNav.setItem("data", JSON.stringify(toStorage));
  };

  const checkTimeStorage = (date) => {
    if (new Date(date) <= new Date()) {
      localStorage.removeItem("data");
    }
  };

  return [saveInNav, checkTimeStorage, saveToLocalStorage];
};

export default useCheckLocalStorage;

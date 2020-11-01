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

  const saveToLocalStorage = (oompas, data, page) => {
    const toStorage = {
      expirationDate: getExpirationDate(),
      page: page,
      oompas: [...oompas, ...data.results],
    };

    localStorage.setItem("data", JSON.stringify(toStorage));
  };

  const checkTimeStorage = (date) => {
    if (new Date(date) <= new Date()) {
      localStorage.removeItem("data");
    }
  };

  return [getData, checkTimeStorage, saveToLocalStorage];
};

export default useLocalStorage;

const useLocalStorage = () => {
  const localStorage = window.localStorage;

  const getExpirationDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    return tomorrow.toString();
  };
  const saveToLocalStorage = (oompas, data) => {
    const toStorage = {
      expirationDate: getExpirationDate(),
      oompas: [...oompas, ...data.results],
    };

    localStorage.setItem("data", JSON.stringify(toStorage));
  };

  const checkTimeStorage = (date) => {
    localStorage.removeItem("data");
    if (new Date(date) <= new Date()) {
      localStorage.removeItem("data");
    }
  };

  return [localStorage, checkTimeStorage, saveToLocalStorage];
};

export default useLocalStorage;

const useCheckLocalStorage = () => {
    const saveInNav = window.localStorage;

    const checkTimeStorage = (date) => {
        localStorage.removeItem("data");
        if (new Date(date) <= new Date()) {
          localStorage.removeItem("data");
        }
      };
      
    return [saveInNav, checkTimeStorage]
}

export default useCheckLocalStorage

import { useEffect, useState } from "react";

const useCheckScroll = () => {
  const [isBottom, setIsBottom] = useState(false);

  const handleScroll = () => {
    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;

    const scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;

    if (scrollTop + window.innerHeight + 200 >= scrollHeight) {
      setIsBottom(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return [isBottom, setIsBottom];
};

export default useCheckScroll;

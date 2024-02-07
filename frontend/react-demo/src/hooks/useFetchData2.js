import { useEffect, useState } from "react";

const useFetchData = (url, cb) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const result = await response.json();
      if (cb) {
        setData(cb(result));
      } else {
        setData(result);
      }
      setError(null);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetchData;

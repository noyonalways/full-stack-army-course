import { useEffect, useState } from "react";
const cacheData = {};

const useUserDetails = () => {
  const [user, setUser] = useState(null);
  const [id, setId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const max = 10;

  useEffect(() => {
    if (cacheData[`user-${id}`]) {
      setUser(cacheData[`user-${id}`]);
      return;
    }

    setIsLoading(true);
    fetchUser(id)
      .then((data) => {
        setUser(data);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  const fetchUser = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        cacheData[`user-${id}`] = data;
        return data;
      });
  };

  useEffect(() => {
    if (!cacheData[`user-${id + 1}`] && id < max) {
      fetchUser(id + 1);
    }
  }, [id]);

  const prevHandle = () => {
    if (id > 1) {
      setId(id - 1);
    }
  };

  const nextHandle = () => {
    if (id < max) {
      setId(id + 1);
    }
  };

  return {
    id,
    max,
    user,
    isLoading,
    nextHandle,
    prevHandle,
  };
};

export default useUserDetails;

import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(url);
        const data = await res.json();
        if (!res.ok) throw new Error("Failed to fetch");
        setData(data);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    getUsers();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;

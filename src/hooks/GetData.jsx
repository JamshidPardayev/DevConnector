
import { useState, useEffect } from "react";
import customAxios from "../api/CustomAxios";

const useGetData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let token = localStorage.getItem("token");
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await customAxios.get(url, {
            headers: {
                "x-auth-token": token,
            },
        });
        setData(response.data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useGetData;


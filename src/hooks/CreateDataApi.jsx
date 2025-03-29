import { useState } from "react";
import customAxios from "../api/CustomAxios";

const useCreateDataApi = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createData = async (newData) => {
    setLoading(true);
    try {
      const response = await customAxios.post(url, newData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { createData, loading, error };
};

export default useCreateDataApi;

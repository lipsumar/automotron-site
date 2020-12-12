import axios from "axios";
import { useEffect, useState } from "react";

const ax = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
});

export default function useApi(route, method = "get") {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    ax[method](route)
      .then((resp) => {
        setData(resp.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [route]);
  return { data, error };
}

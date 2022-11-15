/* eslint-disable no-debugger */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
import { useState, useEffect } from "react";
import useAxiosPrivate from "./useAxiosPrivate";

export const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(null);
  const axiosPrivate = useAxiosPrivate();

  const postData = (postData) => {
    setOptions({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
  };

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async (fetchOptions) => {
      setIsPending(true);

      try {
        let res;
        if (fetchOptions) {
          res = await axiosPrivate.post(url, {
            ...fetchOptions,
            signal: controller.signal,
          });
        } else {
          res = await axiosPrivate.get(url, {
            signal: controller.signal,
          });
        }

        if (res.statusText !== "OK") {
          throw new Error(res.statusText);
        }

        const { data } = res;

        setIsPending(false);
        setData(data);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted");
        } else {
          setIsPending(false);
          setError("Could not fetch the data");
        }
      }
    };

    // invoke the function
    if (method === "GET") {
      fetchData();
    }
    if (method === "POST" && options) {
      fetchData(options);
    }

    return () => {
      controller.abort();
    };
  }, [url, method, options]);

  return { data, isPending, error, postData };
};

import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  console.log(data);
  useEffect(() => {
    async function loadUser() {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setData(data);
          console.log(data);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadUser();
  }, [url]);
  return { data, isLoading };
}

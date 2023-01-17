import { useState, useCallback } from "react";

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setLoading(true);
      try {
        const response = await fetch(url, { method, body, headers });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message);
        }
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const post = useCallback((url, body) => request(url, "POST", body), []);
  const get = useCallback((url) => request(url, "GET"), []);
  const put = useCallback((url, body) => request(url, "PUT", body), []);
  const patch = useCallback((url, body) => request(url, "PATCH", body), []);
  const remove = useCallback((url) => request(url, "DELETE"), []);

  return { data, error, loading, post, get, put, patch, delete: remove };
};

// import { useFetch } from './useFetch';

// function MyComponent() {
//   const { data, error, loading, get } = useFetch();

//   useEffect(() => {
//     get('https://api.example.com/data');
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   return <div>{data && data.name}</div>;
// }

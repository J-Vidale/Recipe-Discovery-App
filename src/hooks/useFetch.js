import { useState, useEffect } from 'react';

export default function useFetch(fetchFn, ...args) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let canceled = false;
    setLoading(true);
    fetchFn(...args)
      .then((d) => {
        if (!canceled) setData(d);
      })
      .catch((e) => {
        if (!canceled) setError(e);
      })
      .finally(() => {
        if (!canceled) setLoading(false);
      });
    return () => {
      canceled = true;
    };
  }, [fetchFn, JSON.stringify(args)]);

  return { data, loading, error };
}

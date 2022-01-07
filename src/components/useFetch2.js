import { useState, useEffect, useCallback } from 'react'

const useFetch2 = (url, isUseEffect) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);
  const doFetch = useCallback(async () => {
    fetch(url, {
      method: 'GET',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => {
        if (!response.ok) {
          throw Error("can not fetch data")
        }
        return response.json()
      })
      .then(data => {
        if (isUseEffect) {
          setData(data)
          setError(null);
          setPending(false);
        }
      })
      .catch(error => {
        if (error.name === "AbortError") {
          console.log("fetch aborted");
        }
        else {
          if (isUseEffect) {
            console.log(error.message);
            setError(error.message);
            setPending(false);
          }
        }
      })
  }, [url, isUseEffect])
  useEffect(() => {
    if (isUseEffect) {
      doFetch();
    }
  }, [isUseEffect, doFetch]);
  return { data, pending, error, doFetch };
}

export default useFetch2;

// .then(response => {
//   if(!response.ok){
//     throw Error("Can not fetch data");
//   }
//   return response.json();
// })
// .then(data => {
//   console.log(data);
//   auth.current = data;
//   console.log(auth.current);
// }) 
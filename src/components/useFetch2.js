import { useState, useEffect } from 'react'

const useFetch2 = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null);
  const abortCont = new AbortController();
  useEffect(() => {
    fetch(url , {
      method: 'GET',
      credentials: "same-origin",
      headers: {
        'Content-Type': 'application/json'
      }}, {signal: abortCont.signal })
      .then(response => {
        if(!response.ok){
          throw Error("Can not fetch data")
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setError(null);
      })
      .catch(error => {
        if(error.name === "AbortError"){
          console.log("fetch aborted");
        }else{
          console.log(error.message);
          setError(error.message);
        }
      })   
      return () => abortCont.abort();   
  }, [url]);
  return {data, error}
}

export default useFetch2;

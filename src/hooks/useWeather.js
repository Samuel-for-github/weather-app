import React, {useState, useEffect} from "react";


const useWeather = (search) => {
    const [data, setData] = useState([]);

    useEffect(() => {
      if (search) {
        fetch(`https://api.api-ninjas.com/v1/weather?city=${search}`, {
          headers: { 'X-Api-Key': 'PuaznLQ8l9JT4CzArvb58QbEgH9tV5WhNp0XnOgz' },
        })
          .then((res) => res.json())
          .then((data) => setData(data));
      }
      else{
        console.log("no value");
      }
     
    }, [search]);

    console.log(data);

    return data;
  };


export default useWeather;

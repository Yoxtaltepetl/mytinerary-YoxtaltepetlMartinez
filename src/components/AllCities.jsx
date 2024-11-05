import { useEffect, useState } from "react";
import { Trip } from "./Trip";
import SearchBar from "./SearchBar";

export default function Cities() {
  

  const [cities, setCities] = useState([]);
  const [text, setText] = useState("");
  let url = `http://localhost:8080/api/cities/all?name=${text}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setCities(result.res || []);
      })
      .catch((error) => console.error(error));
  }, [url]);

  function handleChangeText(value){
    setText(value)
  }

  
  
  return (
    <>
      <SearchBar text={text} handleChangeText={handleChangeText}></SearchBar>
      <Trip cities={cities}></Trip>
    </>
  );
}

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import CityDetails from "../components/CityDetails";

export default function Details() {
  const id = useParams();
  const [city, setCity] = useState([]);
  const url = `http://localhost:8080/api/cities/id/${id.id}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setCity(result.response || []);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="h-screen  bg-gray-800">
        <CityDetails city={city}></CityDetails>
      </div>
    </>
  );
}

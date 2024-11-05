import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import CityDetails from "../components/CityDetails";
import { useNavigate } from "react-router-dom";
import {ItineraryCards} from "../components/ItineraryCards";

export default function Details() {
  const id = useParams();
  const [city, setCity] = useState([]);
  const url = `http://localhost:8080/api/cities/id/${id.id}`;
  const navigate = useNavigate()
    function backCities(){
        navigate('/cities')
    }

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
      <div className="min-h-screen flex flex-col justify-center bg-gray-800">
        <CityDetails city={city}></CityDetails>
        
        <ItineraryCards city={city}></ItineraryCards>
        <button onClick={() => backCities()} className="mt-6 bg-rose-600 h-10 px-2 rounded-sm font-bold text-white"> Return to cities</button>
      </div>
    </>
  );
}

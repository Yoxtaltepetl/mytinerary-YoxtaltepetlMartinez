import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import CityDetails from "../components/CityDetails";
import { useNavigate } from "react-router-dom";
import {ItineraryCards} from "../components/ItineraryCards";

export default function Details() {
  const id = useParams();
  const [city, setCity] = useState([]);
  const [itineraries, setItineraries] = useState([]);
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
        let nameCity = result.response.name;

        const data = async () => {
          try {
              const response = await fetch(`http://localhost:8080/api/itineraries/city/${nameCity}`);
  
              if(!response.ok){
                  throw new Error('Error en la solicitud');
              }
              const dataResponse = await response.json();
              
              setItineraries(dataResponse.res)
          } catch (error) {
              console.log(error);
              
          }
      }
      data();     
      })
      .catch((error) => console.error(error));
  }, []);
  
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center bg-gray-800">
        <CityDetails city={city}></CityDetails>
        
        <ItineraryCards itineraries={itineraries}></ItineraryCards>
        <button onClick={() => backCities()} className="mt-6 bg-rose-600 h-10 px-2 rounded-sm font-bold text-white"> Return to cities</button>
      </div>
    </>
  );
}

import { useNavigate } from "react-router-dom";

export default function CityDetails(city) {
    console.log(city.city);
    const {name, photo} = city.city;
    console.log(name);
    const navigate = useNavigate()
    function backCities(){
        navigate('/cities')
    }
    
  return (
    <>
        <div className="w-full h-3/4 flex flex-col items-center">
            <h2 className="mb-4 text-3xl text-white">{name}</h2>
            <img className="w-1/2 h-2/3" src={photo} alt="" />
            <p className="mt-4 text-2xl text-white">Under Construction</p>
            <button onClick={() => backCities()} className="mt-6 bg-rose-600 h-10 px-2 rounded-sm font-bold text-white"> Return to cities</button>
        </div>
    </>
  )
}

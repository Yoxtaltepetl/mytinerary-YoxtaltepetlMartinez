

export default function CityDetails(city) {
    const {name, photo} = city.city;

  return (
    <>
        <div className="w-full h-96 flex flex-col items-center">
            <h2 className="mb-4 text-3xl text-white">{name}</h2>
            <img className="md:w-1/2 w-2/3 h-2/3" src={photo} alt="" />
            <p className="mt-4 text-2xl text-white">Itineray</p>
        </div>
        
    </>
  )
}

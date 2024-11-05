import React, { useEffect, useState } from 'react'

function ItineraryCards(city) {

    const {name} = city.city;
    console.log(name);
    const [itineraries, setItineraries] = useState([]);

    let url = `http://localhost:8080/api/itineraries/city/${name}`

    useEffect(() => {
        const data = async () => {
            try {
                const response = await fetch(url);
                const dataResponse = await response.json();
                console.log(dataResponse);
                
                setItineraries(dataResponse.res)
            } catch (error) {
                console.log(error);
                
            }
        }
        data();
        
    }, [url])

   function itinerary(){
    return itineraries.map((e) => (
        <ItineraryCard key={e._id} name={e.name} photo={e.photo} price={e.price} duration={e.duration} likes={e.likes} hashtags={e.hashtags}></ItineraryCard>
    ))
   }
    
  return (
    <>
    <div className="flex flex-wrap gap-1 mx-6 pb-4 contentCard justify-center bg-gray-800">
        {itineraries.length !== 0 ? itinerary() : NoItinerary()}
    </div>
   
    </>
  )
}

function ItineraryCard({name, photo, price, duration, likes, hashtags}){
    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
    {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10'>
        <div className='bg-white p-5 rounded flex flex-col justify-center items-center gap-5 w-3/6 h-4/6 relative'>
            <div className=''>
                <h3>Under Construction</h3>
                <button className='bg-rose-600 py-2 px-3 rounded-md absolute bottom-2 right-2' onClick={() => setIsOpen(false)}>Close</button>
            </div>
        </div>
    </div>
    )}
            <div className=" mx-8 w-96 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900 overflow-hidden">
            <div className="rounded-t-lg h-32 overflow-hidden">
                <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain'></img>
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <img className="object-cover object-center h-32" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Woman looking front'></img>
            </div>
            <div className="text-center mt-2">
                <h2 className="font-semibold">{name}</h2>
                <p className="text-gray-500">Price: {price}</p>
                <p className="text-gray-500">Duration: {duration}</p>
                <p className="text-gray-500">Likes: {likes}</p>
                <p className="text-gray-500">{hashtags}</p>
            </div>
            
            <div className="p-4 border-t mx-8 mt-2">
                <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2" onClick={() => setIsOpen(true)}>View More</button>
            </div>
            </div>
        </>
        
    );
}

function NoItinerary(){
    return(
        <>
    <div className=" flex justify-center items-center text-white"> 
      <h3 className="text-3xl">There are not Itineraries for this city. </h3>
    </div>
    </>
    )
}




// eslint-disable-next-line react/prop-types
function Modal() {



  return (
    <>
    
    </>
  )
}

export {ItineraryCards, ItineraryCard, NoItinerary, Modal}
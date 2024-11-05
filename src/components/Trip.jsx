import { useNavigate } from "react-router-dom";


function Trip({ cities }) {
  const city = cities;

  const navigate = useNavigate();

  function navigateParams(id){
    navigate(`/details/${id}`)
  }

  function matches(){
    return city.map((e) => (
      <Card key={e._id} name={e.name} image={e.photo} id={e._id} navigateParams={navigateParams}></Card>
    ))
  }

  return (
    <div className="flex flex-wrap pt-10 mx-6 pb-4 gap-6 contentCard justify-center bg-gray-800">
      {city.length !==0 ? matches(): NoMatches()}
    </div>
  );
}

function Card({ name, image, id, navigateParams }) {
  return (
    <div className="group w-64 h-48 relative  border shadow-lg rounded-xl  dark:shadow-neutral-700/70">
      <img
        className="w-full h-full rounded-xl"
        src={image}
        alt="Card Image"
      ></img>
      <div className="absolute h-full top-0 start-0 end-0">
        <div className="p-4 md:p-5 flex flex-col h-full justify-between">
          <h3 className="text-lg font-bold text-red-500 detailBtn rounded-md w-fit px-1">
            {name}
          </h3>
          <div className=" h-2/6 flex justify-center items-end">
            <button onClick={() => navigateParams(id)} className=" bg-rose-500 px-3 py-1 rounded-md">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function NoMatches(){
  return(
    <>
    <div className=" flex justify-center items-center text-white"> 
      <h3 className="text-3xl">There are not cities that begin with those letters. </h3>
    </div>
    </>
  )
}

export { Trip, Card , NoMatches};

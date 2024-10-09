import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import australia from "../assets/australia.jpg";
import brazil from "../assets/brazil.webp";
import canada from "../assets/canada.jpg";
import colombia from "../assets/colombia.jpg";
import indonesia from "../assets/indonesia.jpeg";
import mexico from "../assets/mexico.png";
import norway from "../assets/noruega.png";
import newZealand from "../assets/nuevaZelanda.webp";
import peru from "../assets/peru.jpg";
import switzerland from "../assets/suiza.jpg";
import japan from "../assets/japon.webp";
import roma from "../assets/roma.jpg";

export default function MyTinerary() {
  const travels = [
    {
      name: "Canada",
      description:
        "Discover the magic of Canada, where impressive natural landscapes and vibrant cities invite you to live unforgettable adventures.",
      backGround: canada,
    },
    {
      name: "Mexico",
      description:
        "Explore the cultural richness and beauty of Mexico, where every corner offers you flavors, traditions and landscapes that will leave you breathless.",
      backGround: mexico,
    },
    {
      name: "Norway",
      description:
        "Immerse yourself in the wild beauty of Norway, where stunning fjords and the Northern Lights create a natural spectacle that will leave you in awe.",
      backGround: norway,
    },
    {
      name: "Peru",
      description:
        "Discover the fascinating heritage of Peru, where ancient civilizations, delicious cuisine and impressive landscapes invite you to a unique adventure in every corner.",
      backGround: peru,
    },
    {
      name: "Switzerland",
      description:
        "Explore magical Switzerland, where the towering Alps, crystal-clear lakes and charming cities create the perfect setting for an unforgettable getaway.",
      backGround: switzerland,
    },
    {
        name: "Japan",
        description:
          "Immerse yourself in the fascinating fusion of tradition and modernity in Japan, where ancient temples, stunning landscapes and a vibrant culture invite you to live a unique experience.",
        backGround: japan,
      },
      {
        name: "Roma",
        description:
          "Discover the timeless beauty of Rome, where history comes to life in every corner and every walk takes you to iconic monuments and irresistible culinary delights.",
        backGround: roma,
      },
      {
        name: "Brazil",
        description:
          "Experience the contagious joy of Brazil, where paradisiacal beaches, lush jungles and a rich culture invite you to experience the celebration of life in every corner.",
        backGround: brazil,
      },
      {
        name: "Australia",
        description:
          "Explore Australia's unique diversity, where stunning landscapes, extraordinary wildlife and vibrant cities offer unforgettable adventures around every corner.",
        backGround: australia,
      },
      {
        name: "Indonesia",
        description:
          "Discover the wonder of Indonesia, an archipelago full of impressive landscapes, fascinating cultures and dream beaches that invite you to live the adventure of a lifetime.",
        backGround: indonesia,
      },
      {
        name: "Colombia",
        description:
          "Immerse yourself in the diversity of Colombia, where lush landscapes, vibrant rhythms and an infectious warmth await you to provide you with an unforgettable experience on every trip.",
        backGround: colombia,
      },
      {
        name: "New Zealand",
        description:
          "Delve into the stunning nature of New Zealand, where dreamlike landscapes, vibrant cultures and outdoor adventures await you around every corner.",
        backGround: newZealand,
      },

  ];

  const [items, setItem] = useState(travels);

  const handleNext = () => {
    setItem((prevItems) => [...prevItems.slice(1), prevItems[0]])
  }

  const handlePrev = () => {
    setItem((prevItems) => [prevItems[prevItems.length-1], ...prevItems.slice(0, -1)])
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    },6000);
    return () => clearInterval(interval);
  })

  return (
    <section id="carousel" className="relative  h-screen overflow-hidden bg-gray-800">
      <div className="containerCard md:w-5/6 w-full absolute top-1/2 left-1/2 h-screen">
        <div className="slide">
          {items.map((item, index) => (
            <div key={index} className="item bg-no-repeat bg-cover absolute top-1/2 inline-block" style={{ backgroundImage: `url(${item.backGround})` }}>
              <div className="content absolute top-1/2 text-left">
                <h2 className="name text-rose-600 font-bold uppercase">{item.name}</h2>
                <p className="des max-md:w-3/4 max-lg:w-2/4 p-3 font-extrabold text-white ">{item.description}</p>
                <button className="bg-rose-600 cursor-pointer">See More</button>
              </div>
            </div>
          ))}
        </div>
        <div className="buttons flex justify-center items-center text-center w-full absolute">
          <button onClick={handlePrev} className="prev flex justify-center items-center hover:bg-rose-600 cursor-pointer bg-white">
            <FaArrowAltCircleLeft />
          </button>
          <button onClick={handleNext} className="next flex justify-center items-center hover:bg-rose-600 cursor-pointer bg-white">
            <FaArrowAltCircleRight />
          </button>
        </div>
      </div>
    </section>
  );
}

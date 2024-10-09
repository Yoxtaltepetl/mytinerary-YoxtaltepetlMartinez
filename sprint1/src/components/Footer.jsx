import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import whatsapp from "../assets/whatsapp.png";
import linkedIn from "../assets/linkedIn.png";

export default function Footer() {
  return (
    <footer className="bg-white h-9 flex flex-row justify-between items-center">
      <div className="flex items-center ml-4 hover:cursor-pointer">
        <img className="h-8 " src={logo} alt="logo MyTinerary"></img>
        <h4 className=" ml-4 text-xl ">MyTinerary</h4>
      </div>
      <div className="flex items-center mr-4">
        <img className="h-7 mr-2 hover:cursor-pointer" src={facebook} alt="logo Facebook"></img>
        <img className="h-7 mr-2 hover:cursor-pointer" src={instagram} alt="logo Instagram"></img>
        <img className="h-7 mr-2 hover:cursor-pointer" src={whatsapp} alt="logo whatsApp"></img>
        <img className="h-9 hover:cursor-pointer" src={linkedIn} alt="logo LinkedIn"></img>
      </div>
    </footer>
  );
}

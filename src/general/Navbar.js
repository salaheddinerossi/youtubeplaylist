import Alink from './Alink';
import { useLocation } from 'react-router-dom';
function Navbar ()  {
    const location = useLocation();
    let isActive = "red font-semibold";
    let notActive = "text-gray-500";
    var first , seconde , third ; 
    if (location.pathname =="/") {
        first = isActive;
        seconde = notActive;
        third = notActive;
   }
   if (location.pathname == "/playlist") {
       first = notActive;
       seconde = isActive;
       third = notActive;
  }
  if (location.pathname =="/create") {
       first = notActive;
       seconde = notActive;
       third = isActive;
   }


    return (
        <div className="bg-white navbarT grid justify-items-center m-0">
            <ul className="flex center">
                <Alink active={first} title="Home" route="/"/>
                <Alink active={seconde} title="Playlist" route="/playlist" />
                <Alink active={third} title="Create" route="/create"/>
            </ul>
        </div>
    )
}

export default Navbar ;
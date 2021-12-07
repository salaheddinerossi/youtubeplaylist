import Alink from './Alink';
function Navbar ()  {
    return (
        <div className="bg-white navbarT grid justify-items-center m-0">
            <ul className="flex center">
                <Alink active="red font-semibold" title="Home" route="/"/>
                <Alink active="text-gray-500" title="Playlist" route="/playlist" />
                <Alink active="text-gray-500" title="Create" route="/create"/>
            </ul>
        </div>
    )
}

export default Navbar ;
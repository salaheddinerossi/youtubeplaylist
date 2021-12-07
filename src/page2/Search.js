import Button from "../general/Button";
function Search () {
    return (
        <form className="felx content-center mt-4 " >
            <input className="mr-2 focus:outline-none input-s" placeholder="search for a playlist  "/>
            <select className=" mr-2 focus:outline-none bg-primary text-white rounded-full border-opacity-0 p-1 px-2">
                <option value=''>--Please choose an option--</option>
                <option value='react'>react </option>
            </select>
            <Button content='submit' />
        </form>
    )
}

export default Search ;
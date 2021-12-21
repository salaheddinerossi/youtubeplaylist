import { useState } from "react";
function Create () {
    const [links,setLinks] = useState([])
    const [i , setI] = useState(0);
    const [valuer,setValuer] = useState([]);
    var arr = [];
    function change (a,b) {
        console.log(a,b)
    }
    const addInput = () => {
    links.push(<Input hello={i} key={i} />)
        setLinks([...links])
        setI(i+1);
}
    function Input (props) {
        return(
            <input className="focus:outline-none input-b mt-3 ml-40" onChange={ change(props.hello)} value={valuer[props.hello]} placeholder="Add a link here" />
        )
    }
    return (
            <div className="container mx-auto mt-5">
            <h1 className="ml-5"> Create your own playlist : </h1>
            <input className="focus:outline-none input-b mt-3 ml-40" placeholder="Playlist name" />
            <div id="inputs">
                {links}
            </div>
            <br/>
            <button onClick={addInput} className="bg-gray-800 ml-40 text-white py-1 px-5 rounded-full mt-3">add another input</button>
            <br/>
            <textarea className="input-b focus:outline-none input-b mt-3 ml-40">

            </textarea>
            <br/>
            <button  className="bg-gray-800 ml-40 text-white py-1 px-5 rounded-full my-3">submit</button>
        </div>
    )
}

export default Create;
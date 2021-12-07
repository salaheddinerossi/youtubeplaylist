import Content1 from "./Content1";
import image from '../images/image1.png';

function Block1 () {
    return(
        <div className=" grid grid-cols-2 container mx-auto">
            <Content1 />
            <img src={image} className="justify-self-end" ></img>
        </div>
    )
}

export default Block1;
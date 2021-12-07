import Content2 from "./Content2";
import image from '../images/image2.png';

function Block2 () {
    return (
        <div className="sec-color">
            <div className="grid grid-cols-2 py-5 container mx-auto">
                <img src={image}></img>
                <Content2/>
            </div>
        </div>
    )
}
export default Block2;
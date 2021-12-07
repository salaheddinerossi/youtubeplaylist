import { Link } from 'react-router-dom';

function Alink (props) {
    return (
        <li className="p-3"><Link to={props.route} className={props.active}>{props.title}</Link></li>   
    )
}
export default Alink;

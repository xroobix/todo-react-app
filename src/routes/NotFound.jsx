import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div className="notfound">
            <p>¯\_(ツ)_/¯</p>
            <h1>Oops...</h1>
            <h5>We can't find the task you're looking for.</h5>
            <Link to="" className="go-back">Click here to go back</Link>
        </div>
    )
}
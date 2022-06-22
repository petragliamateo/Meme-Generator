import icon from "../images/trollface.svg";

function Navbar(){
    return(
        <div className="Navbar">
            <div>
                <img src={icon}></img>
                <h1>Meme Generator</h1>
            </div>
            <div></div>
        </div>
    )
}

export default Navbar;

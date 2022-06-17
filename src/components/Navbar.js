import icon from "../images/trollface.svg";

function Navbar(){
    return(
        <div className="Navbar">
            <div>
                <img src={icon}></img>
                <h1>Meme Generator</h1>
            </div>
            <h3>React Course - Proyect 3</h3>
        </div>
    )
}

export default Navbar;
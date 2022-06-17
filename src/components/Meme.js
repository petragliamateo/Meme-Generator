import React from "react";

function Meme(){

    const [meme, setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : ""
    });

    const [allMeme, setAllMeme] = React.useState([]);

    React.useEffect( () => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => setAllMeme(data.data.memes))
    }, [])
    
    function getMemeImage(){
        let randomMeme = allMeme[Math.floor(Math.random()*100)];
        setMeme( prev => ({
            ...prev, 
            randomImage : randomMeme.url,
        }));
    }

    function handleChange(event){
        setMeme( prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    return(
        <div className="Meme">
            <div>
                <div className="MemeText">
                    <input 
                        type="text" placeholder="Top text"
                        name="topText" value={meme.topText}
                        onChange={handleChange}
                    ></input>
                    <input type="text" placeholder="Bottom text"
                        name="bottomText" value={meme.bottomText}
                        onChange={handleChange}
                    ></input>
                </div>
                <button className="MemeSubmit" onClick={getMemeImage}>Get a New Meme</button>
            </div>

            <div className="MemeConteiner">
                <img className="MemeImg" src={meme.randomImage}></img>
                <h2 className="MemeTextTop">{meme.topText}</h2>
                <h2 className="MemeTextBottom">{meme.bottomText}</h2>
            </div>
            
            
        </div>
    )
}

export default Meme;
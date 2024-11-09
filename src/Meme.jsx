import { useEffect, useState } from "react"

export default function Meme(){

    //meme details and url
    const [meme, setMeme] = useState({toptext:'',bottomtext:'',url:"http://i.imgflip.com/1bij.jpg"})

    //sets text upon user input
    function handleChange(e){
        const {name,value} = e.target
        setMeme(prevState=> ({
            ...prevState, [name]:value
        }))
    }

    //fetch meme image from api
    useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
            .then(res=>res.json())
            .then(data=>{
                setArrayMemes(data.data.memes)
            })
            .catch(()=>{
                setMeme((prevState)=>({
                    ...prevState, toptext:'request error', bottomtext:'please try again!'
                }))
            })
    },[])

    //set array of memes
    const [arrayMemes, setArrayMemes] = useState([])

    //handles form submit to get new meme
    function handleSubmit(e){
        e.preventDefault()
        const idx = Math.floor(Math.random()*arrayMemes.length)
        setMeme(prevState=>({
            ...prevState, url:arrayMemes[idx].url
        }))
    }

    return(
        <main>
            <form onSubmit={handleSubmit} className="appform" action="">
                <input className="input1 inputs" type="text" 
                    aria-label="top text for the meme"
                    placeholder="Meme top text" 
                    name="toptext"
                    value={meme.toptext}
                    onChange={handleChange} 
                    id="toptext" />    
                <input className="input2 inputs" type="text" 
                    aria-label="bottom text for the meme"
                    placeholder="Meme bottom text" 
                    name="bottomtext"
                    value={meme.bottomtext} 
                    onChange={handleChange}
                    id="bottomtext" />
                <button className="btn">Get New Meme</button>    
            </form>
            <div className="imageContainer">
                <h3 className="toptext text">{meme.toptext}</h3>
                <img src={meme.url} alt="" />
                <h3 className="bottomtext text">{meme.bottomtext}</h3>
            </div>



        </main>
    )
}
export default function Meme(){
    return(
        <main>
            <form className="appform" action="">
                <input className="input1 inputs" type="text" 
                    aria-label="top text for the meme" 
                    name="toptext" 
                    id="toptext" />    
                <input className="input2 inputs" type="text" 
                    aria-label="bottom text for the meme"
                    name="bottomtext" 
                    id="bottomtext" />
                <button className="btn">Get Meme</button>    
            </form>
        </main>
    )
}
import trollface from './assets/trollface.png'
export default function Header(){
    return(
        <nav className='nav'>
            <img className='trollface' src={trollface} alt="a troll face picture" />
            <h1>Meme Generator</h1>
        </nav>
    )
}
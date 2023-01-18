import Identicon from 'react-identicons'
import { setGlobalState, truncate, useGlobalState } from '../store'

const imgHero = "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDQvY2E3NzI1ZmMtNDZkNS00OGIwLTkxYWQtYTU5Zjc4YmQ5ZDQ1LmpwZw==.jpg"

export const Hero = () => {
    const [connectedAccount] = useGlobalState('connectedAccount')
return (
    <div className="hero-container">
        <div className="hero-bannerside">
            <div>
                <h1 className="hero-title">Buy and Sell 
                    <br />
                    Digital Arts or,
                    <br />
                    Create Your Own <br />
                    <span className="text-gradient">NFTs</span> Collections
                </h1>
                <p className="hero-description">Mint and collect  the hottest NFTs around.</p>
            </div>
            <div className="hero-button-container">
                <button className="hero-button"  onClick={() => {
                    setGlobalState('modal','animate__bounceIn block');
                    setGlobalState('modalBg','animate__fadeIn block animate__faster');
                }} >
                    Create NFT
                </button>
            </div>
            
            <div className="hero-data">
                <div>
                    <p>123k</p>
                    <small>Users</small>
                </div>
                <div>
                    <p>152k</p>
                    <small>Artwork</small>
                </div>
                <div>
                    <p>200k</p>
                    <small>Artists</small>
                </div>
            </div>
        </div> 
        <div className="hero-imgside">
            <img src={imgHero} alt="Hero" />
            <div>
                <Identicon className="hero-identicon"  string={truncate(connectedAccount,4,4,11)} size={50} />
                <div>
                    <p>{truncate(connectedAccount,4,4,11)}</p>
                    <small>@you</small>
                </div>
            </div>
        </div>
    </div>
)}

export default Hero
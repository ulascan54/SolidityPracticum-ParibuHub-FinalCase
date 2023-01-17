import { setGlobalState, useGlobalState } from '../store'

const Artworks = () => {
const [nfts] = useGlobalState('nfts')
return (
    <div className="artworks-container gradient-bg-artworks">
        <div>
            <h4 className="text-gradient">Latest Artworks</h4>
            <div className="artworks-items-container">
                {nfts
                .map((nft,i)=>(
                    <Card key={i} nft={nft} />
                ))}
            </div>
            <div className="loadmore-button">
            <button>
                Load More
                </button>
            </div>
        </div>
    </div>
)}


const Card = ({ nft }) => {
    const setNft = () =>{
        setGlobalState('nft',nft)
        setGlobalState('showModal','animate__bounceIn block');
        setGlobalState('showModalBg','animate__fadeIn block animate__faster');
    }
    return (
        <div className="artwork-container">
        <img src={nft.metadataURI} alt={nft.title} />
        <h4>{nft.title}</h4>
        <p>{nft.description}</p>
        <div>
            <div>
                <small>Current Price</small>
                <p>{nft.cost} ETH</p>
            </div>
            <button className='artwork-button'
            onClick={setNft}
            >
            View Details
                </button>
        </div>
    </div>
    )
}

export default Artworks
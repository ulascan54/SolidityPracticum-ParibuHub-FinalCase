import { setGlobalState, useGlobalState } from '../store'
const imgArts = "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy9kMDM2OWRhZmI2OWNmNTU3NjIwZmVhZDFkYTY0MzBmYy5qcGc=.jpg"




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


const Card = ({ nft }) => (
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
            onClick={()=> {
                setGlobalState('showModal','animate__bounceIn block');
                setGlobalState('showModalBg','animate__fadeIn block animate__faster');
            }}
            >
            View Details
                </button>
        </div>
    </div>
)

export default Artworks
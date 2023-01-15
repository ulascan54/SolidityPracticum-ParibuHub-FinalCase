import { setGlobalState } from '../store'
const imgArts = "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy9kMDM2OWRhZmI2OWNmNTU3NjIwZmVhZDFkYTY0MzBmYy5qcGc=.jpg"




const Artworks = () => {
return (
    <div className="artworks-container gradient-bg-artworks">
        <div>
            <h4 className="text-gradient">Latest Artworks</h4>
            <div className="artworks-items-container">
                {Array(4)
                .fill()
                .map((nft,i)=>(
                    <Card key={i} nft={i+1} />
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
        <img src={imgArts} alt={"NFT Image"} />
        <h4>NFT #{nft}</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic laudantium, unde, ipsam odio molestias, eligendi illo nisi error delectus ad ratione fuga. Voluptatibus dolorem, quia mollitia saepe neque earum atque laudantium assumenda sequi molestias amet totam vitae vel ratione tempora veniam itaque necessitatibus accusamus laboriosam adipisci consequatur tempore optio nemo!</p>
        <div>
            <div>
                <small>Current Price</small>
                <p>0.34 ETH</p>
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
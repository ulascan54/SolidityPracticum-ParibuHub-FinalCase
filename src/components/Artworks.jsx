import { useEffect, useState } from 'react'
import { setGlobalState, useGlobalState } from '../store'

const Artworks = () => {
const [nfts] = useGlobalState('nfts')
const [end,setEnd] = useState(4)
const [count] = useState(4)
const [collection,setCollection] = useState([])

const getCollection = () => {
    return nfts.slice(0,end)
}

useEffect(() => {
    setCollection(getCollection())
},[nfts, end])

return (
    <div className="artworks-container gradient-bg-artworks">
        <div>
            <h4 className="text-gradient">
                {collection.length > 0 ? 'Latest Artworks' : 'There is No Artworks Yet'}
            </h4>
            <div className="artworks-items-container">
                {collection.map((nft,i)=>(
                    <Card key={i} nft={nft} />
                ))}
            </div>
            <div className="loadmore-button">
                {collection.length>0 && nfts.length>collection.length ? (
                    <button onClick={() => setEnd(end+count)}>Load More</button>
                ) : null }
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
        <p className='h-20 overflow-hidden'>{nft.description}</p>
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
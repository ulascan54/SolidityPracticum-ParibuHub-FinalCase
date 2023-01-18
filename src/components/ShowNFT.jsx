import Identicon from 'react-identicons'
import { FaTimes } from "react-icons/fa"
import { setGlobalState, useGlobalState, truncate, setLoadingMsg, setAlert } from "../store"
import { buyNFT } from '../Blockchain.services'



const ShowNFT = () => {
    const [showModal] = useGlobalState("showModal")
    const [showModalBg] = useGlobalState("showModalBg")
    const [nft] = useGlobalState("nft")
    const [connectedAccount] = useGlobalState("connectedAccount")

    const onChangePrice = () => {
            setGlobalState('updateModal','animate__bounceIn block');
            setGlobalState('updateModalBg','animate__fadeIn block animate__faster');
            setGlobalState('showModal','hidden');
            setGlobalState('showModalBg','hidden');
    }

    const handlePurchase = async () => {
        try {
            setLoadingMsg('Purchasing, awaiting Metamask approval...')
            
            await buyNFT({id:nft?.id, cost:nft?.cost})
            setAlert('NFT purchased...','green')
            setTimeout(() => {
                window.location.reload()
            }, 6000);
        } catch (error) {
            console.log('Error updating price: ',error)
            setAlert('Purchase failed...','red')
        }
    }

    const closeModal = () => {
        setGlobalState("nft", nft)
        setGlobalState("showModal", "animate__bounceOut animate__faster")
        setGlobalState("showModalBg", "animate__fadeOut ")
        setTimeout(() => {
            setGlobalState("showModal", "hidden")
            setGlobalState("showModalBg", "hidden")
        }, 750);
    }
    return (
        <div className={`popup-container flex animate__animated  ${showModalBg}`}>
            <div className={`animate__animated  ${showModal}`}>
                <div className="shownft-container">
                    <div>
                        <p>Buy NFT</p>
                        <button type="button" onClick={closeModal}>
                            <FaTimes />
                        </button>
                    </div>

                    <div>
                        <div>
                            <img src={nft?.metadataURI} alt={nft?.title} />
                        </div>
                    </div>

                    <div>
                        <h4>{nft?.title}</h4>
                        <p>{nft?.description}</p>
                        <div>
                            <div>
                                <Identicon className="identicon" string={nft?.owner ? truncate(nft?.owner,4,4,11) : 'error'} size={50} />
                                <div>
                                    <small>@Owner</small>
                                    <small>{nft?.owner ? truncate(nft?.owner,4,4,11): 'error'}</small>
                                </div>
                            </div>

                            <div>
                                <small>Current Price</small>
                                <p>{nft?.cost} ETH</p>
                            </div>
                        </div>
                    </div>
                    <div>
                    {connectedAccount != nft?.owner ? (
                        <button onClick={handlePurchase}>
                            Purchase
                        </button>
                    ) : (
                        <button
                            onClick={onChangePrice}
                        >
                            Change Price
                        </button>
                    )}
                        

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowNFT
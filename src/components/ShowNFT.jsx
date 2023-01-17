import Identicon from 'react-identicons'
import { useState } from 'react'
import { FaTimes } from "react-icons/fa"
import { setGlobalState, useGlobalState, truncate } from "../store"


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

    const handlePurchase = () => {

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
                                <Identicon className="identicon" string={nft?.owner ? truncate(nft?.owner,4,4,11): 'error'} size={50} />
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
                        <button>
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
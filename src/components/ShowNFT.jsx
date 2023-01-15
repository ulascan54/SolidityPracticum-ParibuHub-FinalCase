import Identicon from 'react-identicons'
import { useState } from 'react'
import { FaTimes } from "react-icons/fa"
import { setGlobalState, useGlobalState } from "../store"
const imgHero = "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDQvY2E3NzI1ZmMtNDZkNS00OGIwLTkxYWQtYTU5Zjc4YmQ5ZDQ1LmpwZw==.jpg"

const ShowNFT = () => {
    const [showModal] = useGlobalState("showModal")
    const [showModalBg] = useGlobalState("showModalBg")

    const handleSubmit = (e) => {
        closeModal()
    }
    const closeModal = () => {
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
                            <img src={imgHero} alt="NFT" />
                        </div>
                    </div>

                    <div>
                        <h4>Title</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum reprehenderit cumque, unde quibusdam, labore, iure similique quos corrupti soluta quam id molestias dolore nostrum ratione non expedita fugit. Eligendi, id.
                        </p>
                        <div>
                            <div>
                                <Identicon className="identicon" string={'adefaefas'} size={50} />
                                <div>
                                    <small>@Owner</small>
                                    <small>0x3213123214.2312421...213</small>
                                </div>
                            </div>

                            <div>
                                <small>Current Price</small>
                                <p>0.34 ETH</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button>
                            Purchase
                        </button>

                        <button
                            onClick={() => {
                                setGlobalState('updateModal','animate__bounceIn block');
                                setGlobalState('updateModalBg','animate__fadeIn block animate__faster');
                                setGlobalState('showModal','hidden');
                                setGlobalState('showModalBg','hidden');
                            }}
                        >
                            Change
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowNFT
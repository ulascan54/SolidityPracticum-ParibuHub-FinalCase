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
        <div className={`shownft-main flex animate__animated  ${showModalBg}`}>
            <div className={`shownft-container animate__animated  ${showModal}`}>
                <div className="flex flex-col">
                    <div className="flex justify-between text-gray-400 items-center">
                        <p className=" font-semibold ">Buy NFT</p>
                        <button type="button" className="border-0 bg-transparent focus:outline-none" onClick={closeModal}>
                            <FaTimes />
                        </button>
                    </div>

                    <div className="flex justify-center items-center rounded-xl mt-5 ">
                        <div className="shrink-0 h-40 w-40 rounded-xl overflow-hidden">
                            <img className="w-full object-cover h-full cursor-pointer" src={imgHero} alt="NFT" />
                        </div>
                    </div>

                    <div className='flex flex-col justify-start rounded-xl mt-5'>
                        <h4 className='text-white font-semibold'>Title</h4>
                        <p className='text-gray-400 text-xs my-1'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum reprehenderit cumque, unde quibusdam, labore, iure similique quos corrupti soluta quam id molestias dolore nostrum ratione non expedita fugit. Eligendi, id.
                        </p>
                        <div className='flex justify-between items-center mt-3 text-white'>
                            <div className='flex justify-start items-center'>
                                <Identicon className="h-10 object-contain rounded-full mr-3" string={'adefaefas'} size={50} />
                                <div className='flex flex-col justify-center items-start'>
                                    <small className='text-white font-bold'>@Owner</small>
                                    <small className='text-blue-400 font-semibold'>0x3213123214.2312421...213</small>
                                </div>
                            </div>

                            <div className='flex flex-col'>
                                <small className='text-xs'>Current Price</small>
                                <p className='text-sm font-semibold'>0.34 ETH</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between items-center space-x-2'>
                        <button className="flex justify-center items-center shadow-lg shadow-black text-md   text-white bg-[#476ec2] hover:bg-[#3453b6] md:text--xs p-2 rounded-full mt-5 w-full">
                            Purchase
                        </button>

                        {/* <button className="flex justify-center items-center shadow-lg shadow-black text-md   text-white bg-[#476ec2] hover:bg-[#3453b6] md:text--xs p-2 rounded-full mt-5 w-full">
                            Change
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowNFT
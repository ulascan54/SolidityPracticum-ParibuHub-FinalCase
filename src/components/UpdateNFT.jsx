import { useState } from 'react'
import {FaTimes} from "react-icons/fa"
import { setGlobalState, useGlobalState ,setLoadingMsg, setAlert } from "../store"
const imgHero = "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDQvY2E3NzI1ZmMtNDZkNS00OGIwLTkxYWQtYTU5Zjc4YmQ5ZDQ1LmpwZw==.jpg"

const UpdateNFT = () => {
    const [modal] = useGlobalState("updateModal")
    const [modalBg] = useGlobalState("updateModalBg")
    const [nft] = useGlobalState("nft")
    const [price,setPrice] = useState(nft?.cost)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!price || price <= 0) return
        closeModal()
        setLoadingMsg('Initializing price update...')
        try {
            setLoadingMsg('Price updating...')
            closeModal()
        } catch (error) {
            setAlert()
        }
    }
    const closeModal =() => {
        setGlobalState("updateModal","animate__bounceOut animate__faster")
        setGlobalState("updateModalBg","animate__fadeOut ")
        setTimeout(() => {
            setGlobalState("updateModal","hidden")
            setGlobalState("updateModalBg","hidden")
        }, 750);
        resetForm()
    }
    const resetForm=()=>{
        setPrice("")
    }
  return (
    <div className={`popup-container animate__animated flex ${modalBg}`}>
        <div className={` animate__animated ${modal}`}>
            <form onSubmit={handleSubmit} className="updatenft-form">

                <div>
                    <p>Candy NFT</p>
                    <button type="button" onClick={closeModal}>
                        <FaTimes />
                    </button>
                </div>

                <div>
                    <div>
                        <img  src={imgHero} alt="NFT" />
                    </div>
                </div>




                <div>
                        <input 
                        placeholder="Price (ETH)"
                        min={0.01}
                        step={0.01}
                        name="price"
                        required
                        onChange={(e)=>setPrice(e.target.value)}
                        value={price}
                        type="number"/>
                </div>



                <button className="">
                    Update Now
                </button>
            </form>
        </div>
    </div>
  )
}

export default UpdateNFT
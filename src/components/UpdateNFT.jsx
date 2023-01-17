import { useState } from 'react'
import {FaTimes} from "react-icons/fa"
import { setGlobalState, useGlobalState ,setLoadingMsg, setAlert } from "../store"
import { updateNFT } from '../Blockchain.services'


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
            
            closeModal()
            setLoadingMsg('Price updating...')
            
            await updateNFT({id:nft?.id, cost:price})
            setAlert('Price updated...','green')
            setTimeout(() => {
                window.location.reload()
            }, 6000);
        } catch (error) {
            console.log('Error updating price: ',error)
            setAlert('Update failed...','red')
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
                    <p>{nft?.title} NFT</p>
                    <button type="button" onClick={closeModal}>
                        <FaTimes />
                    </button>
                </div>

                <div>
                    <div>
                        <img  src={nft?.metadataURI} alt={nft?.title} />
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
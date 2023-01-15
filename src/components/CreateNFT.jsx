import { useState } from 'react'
import {FaTimes} from "react-icons/fa"
import { setGlobalState, useGlobalState } from "../store"
const imgHero = "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDQvY2E3NzI1ZmMtNDZkNS00OGIwLTkxYWQtYTU5Zjc4YmQ5ZDQ1LmpwZw==.jpg"

const CreateNFT = () => {
    const [modal] = useGlobalState("modal")
    const [modalBg] = useGlobalState("modalBg")
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [price,setPrice] = useState("")
    const [fileUrl,setFileUrl] = useState("")
    const [imgBase64,setImgBase64] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault()

        if(!title || !description || !price) return
        console.log("Minted...")

        closeModal()
    }
    const closeModal =() => {
        setGlobalState("modal","animate__bounceOut animate__faster")
        setGlobalState("modalBg","animate__fadeOut ")
        setTimeout(() => {
            setGlobalState("modal","hidden")
            setGlobalState("modalBg","hidden")
        }, 750);
        resetForm()
    }
    const resetForm=()=>{
        setFileUrl("")
        setImgBase64(null)
        setDescription("")
        setPrice("")
    }
  return (
    <div className={`popup-container animate__animated  flex ${modalBg}`}>
        <div className={`animate__animated  ${modal}`}>
            <form onSubmit={handleSubmit} className="createnft-form">

                <div>
                    <p>Add NFT</p>
                    <button type="button" onClick={closeModal}>
                        <FaTimes />
                    </button>
                </div>

                <div>
                    <div>
                        <img src={imgBase64 || imgHero} alt="NFT" />
                    </div>
                </div>

                <div className="createnft-form-item">
                    <label className="block">
                        <span className="sr-only">
                            Choose Profile Photo
                        </span>
                        <input 
                        className="createnft-form-input-file"
                        type="file"
                        accept="image/png, image/jpg, image/gif, image/wenp, image/jpeg" />

                    </label>
                </div>

                <div className="createnft-form-item">
                        <input 
                        className="createnft-form-input "
                        placeholder="Title"
                        name="title"
                        required
                        onChange={(e)=>setTitle(e.target.value)}
                        value={title}
                        type="text"/>
                </div>

                <div className="createnft-form-item">
                        <input 
                        className="createnft-form-input "
                        placeholder="Price (ETH)"
                        min={0.01}
                        step={0.01}
                        name="price"
                        required
                        onChange={(e)=>setPrice(e.target.value)}
                        value={price}
                        type="number"/>
                </div>

                <div className="createnft-form-item">
                        <textarea 
                        className="createnft-form-input h-20 resize-none"
                        placeholder="Description"
                        name="description"
                        required
                        onChange={(e)=>setDescription(e.target.value)}
                        value={description}
                        type="text"></textarea>
                </div>

                <button>
                    Mint Now
                </button>
            </form>
        </div>
    </div>
  )
}

export default CreateNFT
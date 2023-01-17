import { useState } from 'react'
import { FaTimes } from "react-icons/fa"
import { create } from 'ipfs-http-client'
import { setAlert, setGlobalState, setLoadingMsg, useGlobalState } from "../store"
import { mintNFT } from '../Blockchain.services'

const auth =
    'Basic ' +
    Buffer.from(
    'x' + ':' + 'x',
    ).toString('base64')
 

  const client = create({
    host: 'ipfs.infura.io',
    port: '5001',
    protocol: 'https',
    headers: {
      authorization: auth,
    },
  })

const CreateNFT = () => {
    const [modal] = useGlobalState("modal")
    const [modalBg] = useGlobalState("modalBg")
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [price,setPrice] = useState("")
    const [fileUrl,setFileUrl] = useState("")
    const [imgBase64,setImgBase64] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!title || !description || !price) return
        setGlobalState("modal","hidden")
        setGlobalState("modalBg","hidden")
        setLoadingMsg('Uploading to IPFS...')

        try {
            const created = await client.add(fileUrl)
            const metadataURI = `https://ipfs.io/ipfs/${created.path}`
            const nft = { title, price, description, metadataURI }
      
            setLoadingMsg('Intializing transaction...')
            setFileUrl(metadataURI)
            await mintNFT(nft)
      
            resetForm()
            setAlert('Minting completed...', 'green')
            setTimeout(() => {
                window.location.reload()
            }, 6000);

        } catch (error) {
            console.log('Error uploading file:',error)
            setAlert('Minting Failed...','red')
        }
    }

    const changeImage = async (e) => {
        const reader = new FileReader()
        if (e.target.files[0]) reader.readAsDataURL(e.target.files[0])
    
        reader.onload = (readerEvent) => {
            const file = readerEvent.target.result
            setImgBase64(file)
            setFileUrl(e.target.files[0])
        }
    }

    const closeModal =() => {
        setGlobalState("modal","animate__bounceOut animate__faster")
        setGlobalState("modalBg","animate__fadeOut ")
        setTimeout(() => {
            setGlobalState("modal","hidden")
            setGlobalState("modalBg","hidden")
            resetForm()
        }, 750);
    }
    const resetForm=()=>{
        setFileUrl("")
        setImgBase64(null)
        setDescription("")
        setPrice("")
        setTitle("")

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
                        <img src={imgBase64 || './logo64.png'} alt="NFT" />
                    </div>
                </div>

                <div className="createnft-form-item">
                    <label className="block">
                        <span className="sr-only">
                            Choose Profile Photo
                        </span>
                        <input 
                        onChange={changeImage}
                        className="createnft-form-input-file"
                        type="file"
                        accept="image/png, image/webp, image/jpg, image/gif, image/wenp, image/jpeg" />

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
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
        }, 2000);
        resetForm()
    }
    const resetForm=()=>{
        setFileUrl("")
        setImgBase64(null)
        setDescription("")
        setPrice("")
    }
  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 animate__animated  ${modalBg}`}>
        <div className={`bg-[#151c25] shadow-lg shadow-blue-500 rounded-xl w-11/12 md:w-2/5 h-7/12 animate__animated  p-6 ${modal}`}>
            <form onSubmit={handleSubmit} className="flex flex-col">

                <div className="flex justify-between text-gray-400 items-center">
                    <p className=" font-semibold ">Add NFT</p>
                    <button type="button" className="border-0 bg-transparent focus:outline-none" onClick={closeModal}>
                        <FaTimes />
                    </button>
                </div>

                <div className="flex justify-center items-center rounded-xl mt-5 ">
                    <div className="shrink-0 h-20 w-20 rounded-xl overflow-hidden">
                        <img className="w-full object-cover h-full cursor-pointer"  src={imgBase64 || imgHero} alt="NFT" />
                    </div>
                </div>

                <div className=" flex justify-between items-center bg-gray-800 rounded-xl mt-5">
                    <label className="block">
                        <span className="sr-only">
                            Choose Profile Photo
                        </span>
                        <input 
                        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:rounded-full file:px-4 file:border-0 file:text-sm file:font-semibold hover:file:bg-[#476ec2] focus:outline-none cursor-pointer focus:ring-0 hover:file:text-white hover:file:cursor-pointer"
                        type="file"
                        accept="image/png, image/jpg, image/gif, image/wenp, image/jpeg" />

                    </label>
                </div>

                <div className=" flex justify-between items-center bg-gray-800 rounded-xl mt-5">
                        <input 
                        className="block w-full text-sm text-slate-500 focus:outline-none  focus:ring-0 bg-transparent border-0 "
                        placeholder="Title"
                        name="title"
                        required
                        onChange={(e)=>setTitle(e.target.value)}
                        value={title}
                        type="text"/>
                </div>

                <div className=" flex justify-between items-center bg-gray-800 rounded-xl mt-5">
                        <input 
                        className="block w-full text-sm text-slate-500 focus:outline-none  focus:ring-0 bg-transparent border-0 "
                        placeholder="Price (ETH)"
                        min={0.01}
                        step={0.01}
                        name="price"
                        required
                        onChange={(e)=>setPrice(e.target.value)}
                        value={price}
                        type="number"/>
                </div>

                <div className=" flex justify-between items-center bg-gray-800 rounded-xl mt-5">
                        <textarea 
                        className="block w-full text-sm text-slate-500 focus:outline-none  focus:ring-0 bg-transparent border-0 h-20 resize-none"
                        placeholder="Description"
                        name="description"
                        required
                        onChange={(e)=>setDescription(e.target.value)}
                        value={description}
                        type="text"></textarea>
                </div>

                <button className="flex justify-center items-center shadow-lg shadow-black text-md   text-white bg-[#476ec2] hover:bg-[#3453b6] md:text--xs p-2 rounded-full mt-5">
                    Mint Now
                </button>
            </form>
        </div>
    </div>
  )
}

export default CreateNFT
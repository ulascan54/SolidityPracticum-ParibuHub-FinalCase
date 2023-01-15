import { useState } from 'react'
import {FaTimes} from "react-icons/fa"
import { setGlobalState, useGlobalState } from "../store"
const imgHero = "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDQvY2E3NzI1ZmMtNDZkNS00OGIwLTkxYWQtYTU5Zjc4YmQ5ZDQ1LmpwZw==.jpg"

const UpdateNFT = () => {
    const [modal] = useGlobalState("updateModal")
    const [modalBg] = useGlobalState("updateModalBg")
    const [price,setPrice] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()

        if(!price) return
        console.log("Updated...")

        closeModal()
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
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 animate__animated  ${modalBg}`}>
        <div className={`bg-[#151c25] shadow-lg shadow-blue-500 rounded-xl w-11/12 md:w-2/5 h-7/12 animate__animated  p-6 ${modal}`}>
            <form onSubmit={handleSubmit} className="flex flex-col">

                <div className="flex justify-between text-gray-400 items-center">
                    <p className=" font-semibold ">Candy NFT</p>
                    <button type="button" className="border-0 bg-transparent focus:outline-none" onClick={closeModal}>
                        <FaTimes />
                    </button>
                </div>

                <div className="flex justify-center items-center rounded-xl mt-5 ">
                    <div className="shrink-0 h-20 w-20 rounded-xl overflow-hidden">
                        <img className="w-full object-cover h-full cursor-pointer"  src={imgHero} alt="NFT" />
                    </div>
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



                <button className="flex justify-center items-center shadow-lg shadow-black text-md   text-white bg-[#476ec2] hover:bg-[#3453b6] md:text--xs p-2 rounded-full mt-5">
                    Update Now
                </button>
            </form>
        </div>
    </div>
  )
}

export default UpdateNFT
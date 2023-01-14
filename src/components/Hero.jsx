import Identicon from 'react-identicons'
import { setGlobalState } from '../store'

const imgHero = "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDQvY2E3NzI1ZmMtNDZkNS00OGIwLTkxYWQtYTU5Zjc4YmQ5ZDQ1LmpwZw==.jpg"
export const Hero = () => {
return (
    <div className="flex flex-col md:flex-row w-4/5 justify-between items-center mx-auto py-10">
        <div className="md:w-3/6 w-full">
            <div>
                <h1 className="text-white text-5xl font-bold">Buy and Sell 
                    <br />
                    Digital Arts or,
                    <br />
                    Create Your Own <br />
                    <span className="text-gradient">NFTs</span> Collections
                </h1>
                <p className="text-gray-500 font-semibold text-sm mt-3">Mint and collect  the hottest NFTs around.</p>
            </div>
            <div className="flex mt-5">
                <button className="shadow-xl shadow-black text-white bg-[#476ec2] hover:bg-[#3453b6] md:text--xs p-2 rounded-full "  onClick={() => {
                    setGlobalState('modal','animate__bounceIn block');
                    setGlobalState('modalBg','animate__fadeIn block animate__faster');
                }} >
                    Create NFT
                </button>
            </div>
            <div className="w-3/4 flex justify-between items-center mt-5">
                <div className="text-white">
                    <p className=" font-bold">123k</p>
                    <small className=" text-gray-300">Users</small>
                </div>
                <div className="text-white">
                    <p className=" font-bold">152k</p>
                    <small className=" text-gray-300">Artwork</small>
                </div>
                <div className="text-white">
                    <p className=" font-bold">200k</p>
                    <small className=" text-gray-300">Artists</small>
                </div>
            </div>
        </div> 
        <div className=" shadow-xl shadow-black md:w-2/5 w-full mt-10 md:mt-0 rounded-md overflow-hidden bg-gray-800">
            <img className="h-60 w-full object-cover" src={imgHero} alt="Hero" />
            <div className='flex justify-start items-center p-3'>
                <Identicon className=" h-10 w-10 object-contain rounded-full mr-3"  string={'0x21....786a'} size={50} />
                <div>
                    <p className='text-white font-semibold'>0x21....786a</p>
                    <small className='text-[#ADB9D3] font-bold'>@you</small>
                </div>
            </div>
        </div>
    </div>
)}

export default Hero
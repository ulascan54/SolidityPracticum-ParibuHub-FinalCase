import { setGlobalState } from '../store'
const imgArts = "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy9kMDM2OWRhZmI2OWNmNTU3NjIwZmVhZDFkYTY0MzBmYy5qcGc=.jpg"




const Artworks = () => {
return (
    <div className="bg-[#151c25] gradient-bg-artworks">
        <div className="w-4/5 py-10 mx-auto">
            <h4 className="text-white text-3xl font-bold uppercase text-gradient">Latest Artworks</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
                {Array(4)
                .fill()
                .map((nft,i)=>(
                    <Card key={i} nft={i+1} />
                ))}
            </div>
            <div className=" text-center my-5">
            <button className='shadow-lg shadow-black text-white bg-[#476ec2] hover:bg-[#3453b6]  md:text--xs p-2 rounded-full'>
                Load More
                </button>
            </div>
        </div>
    </div>
)}


const Card = ({ nft }) => (
    <div className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
        <img className="h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3" src={imgArts} alt={"NFT Image"} />
        <h4 className="text-white font-semibold">NFT #{nft}</h4>
        <p className=" text-gray-400 text-sm my-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic laudantium, unde, ipsam odio molestias, eligendi illo nisi error delectus ad ratione fuga. Voluptatibus dolorem, quia mollitia saepe neque earum atque laudantium assumenda sequi molestias amet totam vitae vel ratione tempora veniam itaque necessitatibus accusamus laboriosam adipisci consequatur tempore optio nemo!</p>
        <div className="flex justify-between items-center text-white">
            <div className=" flex flex-col">
                <small className="text-xs">Current Price</small>
                <p className="text-sm font-semibold">0.34 ETH</p>
            </div>
            <button className='shadow-md shadow-black text-white bg-[#476ec2] hover:bg-[#3453b6] hover:underline md:text--xs px-1.5 py-1 rounded-full'
            onClick={()=> {
                setGlobalState('showModal','animate__bounceIn block');
                setGlobalState('showModalBg','animate__fadeIn block animate__faster');
            }}
            >
            View Details
                </button>
        </div>
    </div>
)

export default Artworks
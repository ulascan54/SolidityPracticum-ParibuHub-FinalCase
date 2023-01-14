import MainLogo from '../assests/PARIBU-NFT-logos-transparent.png'

const Footer = () => (
    <div className='w-full flex flex-col md:justify-center justify-between items-center p-4 gradient-bg-footer'>
        <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4'>
            <div className='flex flex-[0.45] justify-center'>
                <img className=' w-60' src={MainLogo} alt="Main Logo" />
            </div>
            <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full text-white text-base text-center'>
                <p className=' cursor-pointer mx-2'>Market</p>
                <p className=' cursor-pointer mx-2'>Artists</p>
                <p className=' cursor-pointer mx-2'>Features</p>
                <p className=' cursor-pointer mx-2'>Community</p>
            </div>
            <div className='flex flex-[0.25] flex-col-reverse items-center'>
                <p className='text-white text-right text-sm'>&coppy;2023 All rights revserved.</p>
            </div>
        </div>
    </div>
)

export default Footer
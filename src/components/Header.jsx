import MainLogo from '../assests/PARIBU-NFT-logos-transparent.png'
const Header = () => {
  return (
    <div className="w-4/5  flex md:justify-center justify-between mx-auto items-center py-4">
        <div className='md:flex-[0.5] flex-initial justify-center items-center'>
            <img className="w-40 cursor-pointer" src={MainLogo} alt="logo" />
        </div>

        <ul className='md:flex-[0.5] text-white md:flex  hidden list-none justify-between items-center flex-initial '>
          <li className='mx-4 cursor-pointer'>Market</li>
          <li className='mx-4 cursor-pointer'>Artist</li>
          <li className='mx-4 cursor-pointer'>Features</li>
          <li className='mx-4 cursor-pointer'>Community</li>
        </ul>

        <button className='shadow-xl shadow-black text-white bg-[#476ec2] hover:bg-[#3453b6] md:text--xs p-2 rounded-full'>
          Connect Wallet
        </button>
    </div>
  )
}

export default Header
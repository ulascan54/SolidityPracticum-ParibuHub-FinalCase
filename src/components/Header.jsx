import MainLogo from '../assests/PARIBU-NFT-logos-transparent.png'
const Header = () => {
  return (
    <div className="header-container">
        <div className='header-logo-container'>
            <img className="header-logo" src={MainLogo} alt="logo" />
        </div>

        <ul className='header-menu-container'>
          <li className='header-menu-item'>Market</li>
          <li className='header-menu-item'>Artist</li>
          <li className='header-menu-item'>Features</li>
          <li className='header-menu-item'>Community</li>
        </ul>

        <button className='header-button'>
          Connect Wallet
        </button>
    </div>
  )
}

export default Header
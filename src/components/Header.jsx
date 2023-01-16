import MainLogo from '../assests/PARIBU-NFT-logos-transparent.png'
import Identicon from 'react-identicons'
import { connectWallet } from '../Blockchain.services'
import { truncate, useGlobalState } from '../store'
const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
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

        <button className={`header-button ${connectedAccount ? 'hidden' : 'block'}`} onClick={connectWallet}>
          Connect Wallet
        </button>

        <div className={`header-user flex ${!connectedAccount ? 'hidden' : 'block'}`}>
          <div>
            <Identicon className="header-identicon"  string={truncate(connectedAccount,4,4,11)} size={30} />
          </div>
          <p>{truncate(connectedAccount,4,4,11)}</p>
        </div>
    </div>
  )
}

export default Header
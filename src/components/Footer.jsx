import MainLogo from '../assests/PARIBU-NFT-logos-transparent.png'

const Footer = () => (
    <div className='footer-container'>
        <div>
            <div className='footer-logo'>
                <img src={MainLogo} alt="Main Logo" />
            </div>
            <div className='footer-menu'>
                <p>Market</p>
                <p>Artists</p>
                <p>Features</p>
                <p>Community</p>
            </div>
            <div className='footer-info'>
                <p>&coppy;2023 All rights revserved.</p>
            </div>
        </div>
        <p>Created By <a href="https://www.linkedin.com/in/ulascandemirbag/">Ulaş Can Demirbağ</a></p>
    </div>
)

export default Footer
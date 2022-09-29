import './Header.css'
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaBehance } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { WiMoonWaningCrescent2 } from "react-icons/wi";


const Header = () => {
  return (
    <div className='container'>
        <div className='logo'>Martins Nnolum</div>
        <div className='socials_container'>
            <FaTwitter
                color='white'
                size={27}
                style={{paddingRight:30}}
            />

            <FaLinkedin
                color='white'
                size={27}
                style={{paddingRight:30}}
            />

            <AiFillInstagram
                color='white'
                size={27}
                style={{paddingRight:30}}
            />

            <FaBehance 
                color='white'
                size={27}
                style={{paddingRight:30}}
            />

            <FaDiscord 
                color='white'
                size={27}
                style={{paddingRight:45}}
            />

            <div className='themeToggle'>
                <WiMoonWaningCrescent2 
                    color='white'
                    size={30}
                />  
            </div>
        </div>
    </div>
  )
}

export default Header

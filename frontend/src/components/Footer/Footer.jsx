import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt=""/>
            <p>Welcome to PES University, Bangalore – where excellence meets innovation. We are dedicated to providing world-class education, fostering creativity, and nurturing talent. With cutting-edge facilities and a dynamic learning environment, PESU prepares students for a successful future. Join us in shaping tomorrow’s leaders. Experience education that empowers at PES University.</p>
            <div className="footer-social-icons">
                <a href="https://www.facebook.com/pesuniversity/" target="_blank">
                <img src={assets.facebook_icon} alt="" />
                </a>
                <a target="_blank" href="https://x.com/PESUniversity?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                <img src={assets.twitter_icon} alt="" />
                </a>
                <a target="_blank" href= "https://www.linkedin.com/school/pesuniversity/posts/?feedView=all">
                <img src={assets.linkedin_icon} alt="" />
                </a>
            </div>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 9560248739</li>
                <li>shagalv0@gmail.com</li>
                <br/>
                <li>+91 9930748318</li>
                <li>suyash123@gmail.com</li>
                <br/>
                <li>+91 9588389955</li>
                <li>sagar123@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © CampusChow.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer

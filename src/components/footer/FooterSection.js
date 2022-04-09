import '../../css/FooterSection.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faLinkedinIn,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

const FooterSection = () => {

    return (
        <div className="footerMain">
            
            <p>Jyotirmoy Das | Web Developer @2022</p>
            <div class="social-container">                
                <a href="https://www.youtube.com/channel/UCbVXfJT0zA79w9Axl3Kx8eA/featured"
                    className="youtube social">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="https://www.facebook.com/people/Jyotirmoy-Das/100009157844756/"
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://github.com/jdpro19"
                    className="github social">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://twitter.com/Jyotirm23202283" 
                    className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/jyotirmoy-das-a4054169/"
                    className="linkedin social">
                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                </a>                
            </div>
            
            
        </div>
    );
}

export default FooterSection;
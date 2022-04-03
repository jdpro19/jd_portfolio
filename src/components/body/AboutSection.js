import '../../css/AboutSection.css';
import IMAGES from '../../img/techstacks_svg/index.js';

const AboutSection = () => {
    return(
        <div className="abt-container">            
            <div className="abt-content">
                <p>Hello folks, I'm Jyotirmoy Das (JD).</p>
                <p>I'm a Web Developer and Designer from Guwahati, India.</p> 
                <p>I spend most of my time coding and listening music.</p>
            </div>
            <div className="abt-skills">
                <div className='skills-block-js'>
                    <img src={IMAGES.jsLogo} alt="Javascript"/>                                    
                    <img src={IMAGES.reactLogo} alt="React JS"/>
                    <img src={IMAGES.nextjsLogo} alt="Next JS"/>
                </div>

                <div className='skills-block-python'>
                    <img src={IMAGES.pythonLogo} alt="Python"/>
                    <img src={IMAGES.djangoLogo} alt="Django"/>
                </div>

                <div className='skills-block-git'>
                    <img src={IMAGES.gitdeployLogo} alt="Git"/>                    
                </div>


                <div className='skills-block-php'>
                    <img src={IMAGES.laravelLogo} alt="Laravel"/>
                    <img src={IMAGES.codeigniterLogo} alt="Codeigniter"/>
                </div>
                
                <div className='skills-block-misc'>
                    <img src={IMAGES.mysqlLogo} alt="MySQL"/>
                    <img src={IMAGES.tailwindLogo} alt="Tailwind"/>
                    <img src={IMAGES.firebaseLogo} alt="Firebase"/>
                </div>
            </div>
        </div>
    );
}
export default AboutSection;
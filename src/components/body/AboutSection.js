import '../../css/AboutSection.css';
import IMAGES from '../../img/techstacks_svg/index.js';

const AboutSection = () => {
    return(
        <div className="abt-container" id="AboutSection">            
            <div className="abt-content">
                <h2>About me..</h2>
                <p>Hello folks, I'm Jyotirmoy Das (JD).
                I'm a Web Developer and Designer from Guwahati, India.
                I spend most of my time coding and listening to music.</p>                
            </div>
            
            <div className="abt-skills">
                <div className='skills-block-techstack'>
                    <h2>Techstacks known..</h2>                    
                    <img src={IMAGES.jsLogo} alt="Javascript"/>                                    
                    <img src={IMAGES.reactLogo} alt="React JS"/>
                    <img src={IMAGES.nextjsLogo} alt="Next JS"/>\
                    <img src={IMAGES.pythonLogo} alt="Python"/>
                    <img src={IMAGES.djangoLogo} alt="Django"/>
                    <img src={IMAGES.gitdeployLogo} alt="Git"/> 
                    <img src={IMAGES.laravelLogo} alt="Laravel"/>
                    <img src={IMAGES.codeigniterLogo} alt="Codeigniter"/>
                    <img src={IMAGES.mysqlLogo} alt="MySQL"/>
                    <img src={IMAGES.tailwindLogo} alt="Tailwind"/>
                    <img src={IMAGES.firebaseLogo} alt="Firebase"/>
                </div>                
            </div>
        </div>
    );
}
export default AboutSection;
import jd_pic from '../../img/jd_pic.jpeg';
import '../../css/FirstSection.css';

const FirstSection = () => {
    return (
        <div className="main">
            <div className="pic">
                <img src={jd_pic} alt="jdpic"/>
            </div>
            <div className="rightMain">                
                <h1>Hello World, This is JD ;)</h1>
                <h2>Web Designer & Developer</h2>
            </div>
        </div>
    );
}

export default FirstSection;
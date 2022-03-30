import jd_pic from '../../img/jd_pic.jpeg';
import '../../css/FirstSection.css';

const FirstSection = () => {
    return (
        <div className="main">
            <div className="pic">
                <img src={jd_pic}/>
            </div>
        </div>
    );
}

export default FirstSection;
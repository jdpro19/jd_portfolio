import projectsvg from '../../img/browser-coding-svgrepo-com.svg';
import '../../css/ProjectSection.css';

const ProjectSection = () => {
    return (
        <div className="projectContainer" id="ProjectSection">
            <div>
                <h1>Recent Projects</h1>
                <div className="card">
                    <div className="card-img">
                        <img src={projectsvg} alt="simple blog project"/>
                    </div>
                    <div className="card-title">
                        <a href="https://github.com/jdpro19/blogProject">
                            <h3>Simple blog</h3>
                            <h4>React and Firebase</h4>
                        </a>                        
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src={projectsvg} alt="one page website"/>
                    </div>
                    <div className="card-title">
                        <a href="https://github.com/jdpro19/single_page_website_demo">
                            <h3>One Page Website</h3>
                            <h4>React and CSS</h4>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src={projectsvg} alt="nextjs navbar"/>
                    </div>
                    <div className="card-title">
                        <a href="https://github.com/jdpro19/nextjsnavbar">
                            <h3>Navbar</h3>
                            <h4>NextJS</h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectSection;
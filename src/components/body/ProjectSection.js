import jd_pic from '../../img/jd_pic.jpeg';
import '../../css/ProjectSection.css';

const ProjectSection = () => {
    return (
        <div className="projectContainer" id="ProjectSection">
            <div>
                <h1>My Projects</h1>
                <div className="card">
                    <div className="card-img">
                        <img src={jd_pic}/>
                    </div>
                    <div className="card-title">
                        <h3>This is a Project</h3>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src={jd_pic}/>
                    </div>
                    <div className="card-title">
                        <h3>This is a Project</h3>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src={jd_pic}/>
                    </div>
                    <div className="card-title">
                        <h3>This is a Project</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectSection;
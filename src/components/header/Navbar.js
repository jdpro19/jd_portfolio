import '../../css/Navbar.css';

const Navbar = () => {
    return(
        <div className="container-main">
            <nav className="navbar">
                <div className='logo'>
                    <h2>JD</h2>
                </div>
                
                <ul className="nav-list" id="navlistId">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#AboutSection">About</a>
                    </li>
                    <li>
                        <a href="#ProjectSection">Projects</a>
                    </li>
                    <li>
                        <a href="https://jdblogs.hashnode.dev/">Blogs</a>
                    </li>
                </ul>
                <div className="menu" id="toggleMenu">
                    <div className='menu-line'></div>
                    <div className='menu-line'></div>
                    <div className='menu-line'></div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
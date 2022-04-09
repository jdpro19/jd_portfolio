import ReactDom from "react-dom";
import App from './App.js';
import './index.css';


ReactDom.render(
    <div>        
        <App/>
    </div>
    , document.getElementById('root')
);

const toggleMenu = document.getElementById('toggleMenu');
const navlistId = document.getElementById('navlistId'); 

toggleMenu.addEventListener('click', () => {
    navlistId.classList.toggle('active');    
});
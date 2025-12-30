import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
      
            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        
    );
}

export default Navigation;
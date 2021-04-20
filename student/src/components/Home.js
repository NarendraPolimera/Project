
import img from '../images/main_img.jpg';
import { Link } from 'react-router-dom';
import '../index.css';

const Home = () => {

    return ( 
    <div>
        <nav className="nav2">
        <Link to="/Profile" style={{fontSize: 150,  color:'black', border:'15px solid black'}}>Profile</Link>
        <Link to='/About' style={{fontSize: 150, color:'black',border:'15px solid black' }}>About</Link>
        <Link to='/Courses' style={{fontSize: 150, color:'black',border:'15px solid black' }}>Courses</Link>
        <Link to='/Features' style={{fontSize: 150, color:'black',border:'15px solid black' }}>Features</Link>
    </nav>
    <img src ={img}  alt="IMAGE" width="5800" />
    <nav className="nav2">
        <Link to="/Contact" style={{fontSize: 150,  color:'black', border:'15px solid black'}}>Contact</Link>
        <Link to='/FAQ' style={{fontSize: 150, color:'black',border:'15px solid black' }}>FAQ</Link>
        <Link to='/Logout' style={{fontSize: 150, color:'black',border:'15px solid black' }}>Logout</Link>
    </nav>
    </div>
    
     );
}
 
export default Home;
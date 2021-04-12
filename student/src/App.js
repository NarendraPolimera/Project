import img from './images/main_img.jpg';
import './App.css';
import Navbar from'./components/Navbar';
function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <img src ={img}  alt="IMAGE"/>
    </div>
  );
}

export default App;

import { Link } from "react-router-dom";
import "../App.css";
function Navbar(){
return(
<div className="navbar">
    <h2>Employee App</h2>
    <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/register">Registration</Link>
        <Link to="/users">Display Users</Link>
        <Link to="/api">API Demo</Link>
    </div>

</div>
)}

export default Navbar;
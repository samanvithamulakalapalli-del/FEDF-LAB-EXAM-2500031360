import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./exam/Navbar";
import Home from "./exam/Home";
import Registration from "./exam/Registration";
import DisplayUsers from "./exam/DisplayUsers";
import ApiDemo from "./exam/ApiDemo";
import "./App.css";
function App(){
return(
<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/register" element={<Registration/>}/>
<Route path="/users" element={<DisplayUsers/>}/>
<Route path="/api" element={<ApiDemo/>}/>
</Routes>
</BrowserRouter>
)}

export default App;
import { useEffect, useState } from "react";
import "../App.css";
function DisplayUsers(){
const [users,setUsers] = useState([]);
useEffect(()=>{
let data = JSON.parse(localStorage.getItem("employees")) || [];
setUsers(data);
},[]);
return(
<div className="table-container">
    <h2>Registered Employees</h2>
<table>
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Contact</th>
    </tr>
{users.map((u,i)=>(
    <tr key={i}>
        <td>{u.name}</td>
        <td>{u.email}</td>
        <td>{u.department}</td>
        <td>{u.salary}</td>
        <td>{u.contact}</td>
    </tr>
))}
</table>
</div>
)}

export default DisplayUsers;
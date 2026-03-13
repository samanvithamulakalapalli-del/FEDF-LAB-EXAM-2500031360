import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
function ApiDemo(){
const [data,setData] = useState([]);
useEffect(()=>{
    axios.get("https://dummy-json.mock.beeceptor.com/posts")
.then(res=>setData(res.data));
},[]);
return(
<div className="table-container">
    <h2>API Demo</h2>
        <table>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
{data.map((post)=>(
            <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
            </tr>
))}
</table>
</div>
)}

export default ApiDemo;
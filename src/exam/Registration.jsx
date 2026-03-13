import { useState } from "react";
function Registration(){
const [emp,setEmp] = useState({
name:"",
email:"",
department:"",
salary:"",
contact:""
});
const handleChange = (e)=>{
setEmp({...emp,[e.target.name]:e.target.value});
};
const submitForm = (e)=>{
e.preventDefault();
let employees = JSON.parse(localStorage.getItem("employees")) || [];
employees.push(emp);
localStorage.setItem("employees",JSON.stringify(employees));
alert("Employee Registered");
setEmp({
name:"",
email:"",
department:"",
salary:"",
contact:""
});
};
return(
<div style={{display:"flex",justifyContent:"center",marginTop:"40px"}}>
<div style={{
width:"400px",
padding:"20px",
background:"white",
boxShadow:"0px 0px 8px gray",
borderRadius:"8px"
}}>
<h2 style={{textAlign:"center"}}>Employee Registration</h2>
<form onSubmit={submitForm}>
    
<input
name="name"
placeholder="Employee Name"
value={emp.name}
onChange={handleChange}
style={{width:"100%",padding:"8px",marginBottom:"10px"}}/>

<input
name="email"
placeholder="Email"
value={emp.email}
onChange={handleChange}
style={{width:"100%",padding:"8px",marginBottom:"10px"}}/>

<input
name="department"
placeholder="Department"
value={emp.department}
onChange={handleChange}
style={{width:"100%",padding:"8px",marginBottom:"10px"}}/>

<input
name="salary"
placeholder="Salary"
value={emp.salary}
onChange={handleChange}
style={{width:"100%",padding:"8px",marginBottom:"10px"}}/>

<input
name="contact"
placeholder="Contact Number"
value={emp.contact}
onChange={handleChange}
style={{width:"100%",padding:"8px",marginBottom:"10px"}}/>

<button type="submit" style={{width:"100%",padding:"10px"}}>Register</button>
</form>
</div>
</div>
)}

export default Registration;
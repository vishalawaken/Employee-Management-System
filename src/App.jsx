import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
 
  const [user,setUser]=useState(null)
  const [loggedInUserData,setLoggedInUserData]=useState(null)
  const [userData,setUserData] = useContext(AuthContext)
  console.log(userData);

  useEffect(()=>{
    const loggedInUser = localStorage.getItem("loggedInUser");
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      console.log(userData)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])
  

  
 

  const handleLogin = (email,password)=>{
    if(email == "admin@me.com" && password == "123"){
      setUser("admin")
      console.log(user)
      localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}))
    }
    else if (userData && userData.length > 0){
      const employee = userData.find((e)=>email==e.email && e.password == password)
      if(employee){
        setUser("employee")
        setLoggedInUserData(employee)
        console.log(user)
        localStorage.setItem("loggedInUser",JSON.stringify({role:"employee",data:employee}))
      }
      
   
    }
    else{
      alert("Invalid Crednetials")
    }
  }
 
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}></Login> :""}
     {user == "admin" ? <AdminDashboard changeUser={setUser}></AdminDashboard> :(user == "employee" ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}></EmployeeDashboard> :null) }
     
    </>
  );
};

export default App;

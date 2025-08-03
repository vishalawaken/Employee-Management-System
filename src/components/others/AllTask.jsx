import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const AllTask = () => {


  const [userData,setUserData] = useContext(AuthContext)
  console.log(userData.employees);
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded-xl h-60 '>

        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between'>
            <h2 className='w-1/5'>Employee Name</h2>
            <h3 className='w-1/5'>New Task</h3>
            <h5 className='w-1/5'>Active Task</h5>
            <h5 className='w-1/5'>Completed</h5>
            <h5 className='w-1/5'>Failed Task</h5>
        </div>

      
      

      <div className='h-[80%] overflow-auto'>
      {userData.map(function(elem,index){
        return (
        <div key={index} className=' mb-2 py-2 px-4 flex justify-between'>
            <h2 className='text-lg w-1/5 text-white-200'>{elem.firstName}</h2>
            <h3 className='text-lg w-1/5 text-blue-600'>{elem.taskStats.newTask}</h3>
            <h5 className='text-lg w-1/5 text-yellow-200'>{elem.taskStats.active}</h5>
            <h5 className='text-lg w-1/5 text-green-600'>{elem.taskStats.completed}</h5>
            <h5 className='text-lg w-1/5 text-red-600'>{elem.taskStats.failed}</h5>
        </div>
        )
      })}
      </div>
        

         

        
    </div>
  )
}

export default AllTask
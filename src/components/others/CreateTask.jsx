import React from 'react'
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {


const [userData,setUserData] = useContext(AuthContext)

  const[taskTitle,setTaskTitle]=useState("");
    const[taskDescription,setTaskDescription]=useState("");
    const[taskDate,setTaskDate]=useState("");
    const[assignTo,setAssignTo]=useState("");
    const[taskCategory,setTaskCategory]=useState("");

    const [newTask,setNewTask]=useState([]);

  const submitHandler=(event)=>{
    event.preventDefault()
    console.log("Task Created",taskTitle,taskDescription,taskDate,assignTo,taskCategory);
    setTaskTitle("")
    setTaskDescription("")
    setTaskDate("")
    setAssignTo("")
    setTaskCategory("")

    setNewTask({taskTitle,taskDescription,taskDate,taskCategory,active:false,newTask:true,completed:false,failed:false})

    console.log(newTask)

    const data = userData
    

    data.forEach(function(elem){
      if(assignTo == elem.firstName){
        elem.tasks.push(newTask)
        elem.taskStats.newTask++  
        console.log(elem);
      }
    })

    setUserData(data)

    console.log(data);

    

    setTaskTitle("")
    setTaskDescription("")
    setTaskDate("")
    setAssignTo("")
    setTaskCategory("")
    
  }
  return (
    <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Create New Task</h2>
        <form onSubmit={(event)=>{submitHandler(event)}} className="flex flex-wrap w-full bg-[#2A2A2A] rounded-xl shadow-lg p-8 items-start justify-between border border-gray-700">
            <div className="w-full md:w-1/2 pr-0 md:pr-6 mb-6 md:mb-0">
                <div className="mb-4">
                  <h3 className="text-gray-300 font-medium mb-2">Task Title</h3>
                  <input 
                  value={taskTitle}
                  onChange={(event)=>{setTaskTitle(event.target.value)}}
                    type="text" 
                    placeholder="Make a UI Design" 
                    className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-[#3A3A3A] text-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                  />
                </div>
         
                <div className="mb-4">
                  <h3 className="text-gray-300 font-medium mb-2">Date</h3>
                  <input 
                  value={taskDate}
                  onChange={(event)=>{setTaskDate(event.target.value)}}
                    type="date" 
                    className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-[#3A3A3A] text-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-4">
                  <h3 className="text-gray-300 font-medium mb-2">Assign to</h3>
                  <input 
                  value={assignTo}
                  onChange={(event)=>{setAssignTo(event.target.value)}}
                    type="text" 
                    placeholder="Employee name" 
                    className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-[#3A3A3A] text-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-4">
                  <h3 className="text-gray-300 font-medium mb-2">Category</h3>
                  <input 
                  value={taskCategory}
                  onChange={(event)=>{setTaskCategory(event.target.value)}}
                    type="text" 
                    placeholder="design, dev, etc" 
                    className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-[#3A3A3A] text-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
                  />
                </div>
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="text-gray-300 font-medium mb-2">Description</h3>
              <textarea 
              value={taskDescription}
              onChange={(event)=>{setTaskDescription(event.target.value)}}
                name="description" 
                id="description" 
                rows="10" 
                className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-[#3A3A3A] text-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent resize-none"
                placeholder="Enter task description here..."
              ></textarea>
            </div>
          
            <div className="w-full mt-8 flex justify-end">
              <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50">
                Create Task
              </button>
            </div>
        </form>
      </div>
  )
}

export default CreateTask
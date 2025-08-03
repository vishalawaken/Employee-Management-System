import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
  
  return (
    <div id="tasklist" className="h-[50%] overflow-x-auto w-full mt-10 py-5 flex-nowrap flex items-center justify-start gap-10 ">
      {data.tasks.map((elem,index)=>{
        if(elem.active){
          return <AcceptTask data={elem} key={index}></AcceptTask>
        }
        if(elem.newTask){
          return <NewTask data={elem} key={index}></NewTask>
        }
        if(elem.completed){
          return <CompleteTask data={elem} key={index}></CompleteTask>
        }
        if(elem.failed){
          return <FailedTask data={elem} key={index}></FailedTask>
        }
      })}
    </div>
  );
};

export default TaskList;








 
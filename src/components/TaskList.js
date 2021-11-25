import {Button} from 'react-bootstrap'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {Task} from './Task'



export const TaskList = () => {
    const [status,setStatus]=useState("All")
    

    const listtask= useSelector(state=>state.task.ListTask)
    return (
        <div>
            <div className='searchBtn'>
        <Button variant='dark' onClick={()=>setStatus("All")}>All</Button>
        
        <Button variant='dark' onClick={()=>setStatus("Done")}>DONE</Button>
        
        <Button variant='dark' onClick={()=>setStatus("Undone")}>UNDONE</Button>
        </div>
           {
           status === "Done" ? listtask
           .filter((el)=>el.isDone === true)
           .map((el)=> <Task task={el} key={el.id}/>):status === "Undone" ? listtask.filter((el)=>el.isDone ===false)
           .map((el)=> <Task task={el} key={el.id}/>):listtask.map((el)=> <Task task={el} key={el.id}/>)
           } 
       

        </div>
    )
}

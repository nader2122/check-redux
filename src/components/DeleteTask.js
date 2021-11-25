import React from 'react'
import {Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTask } from '../redux/action/action'

export const DeleteTask = ({task}) => {
    const dispatch =useDispatch()
    const handleDelete=()=>{
         dispatch((deleteTask(task.id)))
    }
    return (
        <div>
        <Button onClick={handleDelete} variant="danger">Delete</Button>    
        </div>
    )
}

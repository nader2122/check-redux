import React, { useState } from 'react'
import { Form , Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import addTask from '../redux/action/action';


export const AddTask = () => {
    const dispatch = useDispatch();
    const [text,setText]=useState("")
    const handleChange=(e)=>{
        e.preventDefault()
        if(text){
            dispatch(addTask({id:Math.random(),text:text,isDone:false}));
            setText('')
        }else{
            alert('no task added')
        }

    }
    return (
        <div style={{display:'flex',justifyContent:'center',margin:'50px 0'}}>
                    
     <Form onSubmit={handleChange}>
    <Form.Control type="text"
    placeholder="new task..." 
    onChange={(e)=>setText(e.target.value)}
    value={text}
    style={{width:'500px'}}/>
    <Button variant="success" type="submit" style={{position:'relative',float:'right'}}>
    Submit
    </Button>
    </Form>
    </div>
    )
}

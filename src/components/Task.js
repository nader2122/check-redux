import {Button} from 'react-bootstrap'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { DeleteTask } from './DeleteTask'
import { EditTask } from './EditTask'
import { doneTask } from '../redux/action/action'
import { useDispatch } from 'react-redux'

export const Task = ({task }) => {
    const dispatch = useDispatch()
    return (
        <Container>
            <Row>
        <div style={{margin:'10px 20px',border:'2px solid grey',padding:'10px',fontSize:'20px' , display:'flex'}}>
        <Col md={9} sm={9} xs={5}>
           <span className={task.isDone ? 'done' : null}>{task.text}</span> 
           </Col>

           <Col md={1} sm={1} xs={3}>
           <Button onClick={()=>dispatch(doneTask(task.id))} variant={task.isDone?"success":"info"}>{task.isDone?"UnDone":"Done"}</Button>
           </Col>

           <Col md={1} sm={1} xs={2}>
           <EditTask task={task}/>
           </Col>

           <Col md={1} sm={1} xs={2}>
           <DeleteTask task={task}/>
           </Col>
           
        </div>
        </Row>
        </Container>
    )
}

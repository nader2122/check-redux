import React, { useState } from 'react'
import {Modal ,Button ,Form} from 'react-bootstrap'
import { editTask } from '../redux/action/action';
import { useDispatch } from 'react-redux';

export const EditTask = ({task}) => {
   
 const [show, setShow] = useState(false);

const [newText,setNewText]=useState(task.text)

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  const dispatch = useDispatch();
 
  const  handleEdit =()=> { 
    dispatch(editTask(task.id,newText))
       handleClose()
   }

return (
  <>
    <Button variant="warning" onClick={handleShow}>
      Edit
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>           
      <Form>
    <Form.Control type="text" value={newText} onChange={(e)=>setNewText(e.target.value)}
    placeholder="new task..." />
  
    </Form>





      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleEdit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>

    )
}

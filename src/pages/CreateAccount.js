import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {useState} from 'react'

const CreateAccount = (props) => {
    const [user, setUser] = useState({})

    const handleSubmit = (event) => {
            event.preventDefault(); // Prevent Form from Refreshing
            props.handleSubmit(); // Submit  desired function
            props.history.push("/home"); //Push back to Home page
    };
    const handleChange = (event) => {
        console.log('handleChange - value', event.target.value)
        console.log('handleChange - name', event.target.name)        
        const name = event.target.name 
        setUser({
          ...user,
          [name]: event.target.value
        })
      }
    return (
        <>
            <h1>We Need Your Deets</h1>
            <Form inline onSubmit={handleSubmit}>
            <FormGroup >
                <Label for="exampleEmail" >Whats your name?</Label>
                <Input type="name" name="name" id="exampleNAme" placeholder="First Name" />
            </FormGroup>
            {' '}
            <FormGroup >
                <Label for="exampleUsername" >What should we call you?</Label>
                <Input type="username" name="Username" id="exampleUsername" placeholder="Username" />
            </FormGroup>
            {' '}
            <FormGroup >
                <Label for="examplePassword" >Just make sure it isn't "password"</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
            </FormGroup>
            {' '}
            <Button
            onClick={handleSubmit}
            className="btn btn-med btn-danger btn-block"
            >Submit</Button>
            
            </Form>
       
        </> 
    )
}

export default CreateAccount
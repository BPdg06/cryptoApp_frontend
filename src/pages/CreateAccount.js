import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {useState} from 'react'
import {withRouter} from 'react-router-dom'

const CreateAccount = (props) => {
    const [user, setUser] = useState({name: "", username: "", password: ""})

    const handleSubmit = (event) => {
            event.preventDefault();     // Prevent Form from Refreshing
            props.handleCreate(user)    // Submit  desired function
            
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
    
      React.useEffect(() => {
          
      })
    return (
        <>
            <h1>We Need Your Deets</h1>
            <Form inline >
            <FormGroup >
                <Label for="exampleEmail" >Whats your name?</Label>
                <Input onChange={handleChange} type="name" name="name" id="exampleNAme" placeholder="First Name" />
            </FormGroup>
            {' '}
            <FormGroup >
                <Label for="exampleUsername" >What should we call you?</Label>
                <Input onChange={handleChange} type="username" name="username" id="exampleUsername" placeholder="Username" />
            </FormGroup>
            {' '}
            <FormGroup >
                <Label for="examplePassword" >Just make sure it isn't "password"</Label>
                <Input onChange={handleChange} type="password" name="password" id="examplePassword" placeholder="Password" />
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

export default withRouter(CreateAccount)
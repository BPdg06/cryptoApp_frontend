import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {useState} from 'react'

const CreateAccount = (props) => {
    const [login, setLogin] = useState({})
    const handleSubmit = (event) => {
    console.log('handleSubmit')
  }
    const handleChange = (event) => {
        console.log('handleChange - value', event.target.value)
        console.log('handleChange - name', event.target.name)
        const name = event.target.name 
        setLogin({
          ...login,
          [name]: event.target.value
        })
      }
    return (
        <>
            <h1>We Need Your Deets</h1>
            <Form inline>
            <FormGroup handleChange={handleChange}>
                <Label for="exampleEmail" hidden>Whats your name?</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="First Name" />
            </FormGroup>
            {' '}
            <FormGroup handleChange={handleChange}>
                <Label for="exampleUsername" hidden>What should we call you?</Label>
                <Input type="username" name="Username" id="exampleUsername" placeholder="Username" />
            </FormGroup>
            {' '}
            <FormGroup handleChange={handleChange}>
                <Label for="examplePassword" hidden>Just make sure it isn't "password"</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
            </FormGroup>
            {' '}
            <Button
            onClick={handleSubmit}
            className="btn btn-med btn-danger btn-block">Submit</Button>
            
            </Form>
       
        </> 
    )
}

export default CreateAccount
import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {useState} from 'react'

const CreateAccount = (props) => {
    const [user, setUser] = useState(props.setUser)

    const handleSubmit = (props) => {
            props.preventDefault(); // Prevent Form from Refreshing
                                    // Submit  desired function
                                    //Push back to Home page
    };
    
      React.useEffect(() => {
          
      })
    return (
        <>
            <h1>We Need Your Deets</h1>
            <Form inline >
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
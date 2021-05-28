import React, { useEffect } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {useState} from 'react'


const Login = (props) => {

    const [user, setUser] =  useState({username: "", password: ""}) 
    const handleSubmit = () => {
      props.getLogin(user.username, user.password)
      
    console.log('handleSubmit')

  }
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
        
      }, []);
  
    
    
    return (
        <div id= 'form'>
            <Form inline>
            <FormGroup >
                <Label for="exampleUsername" hidden>Username</Label>
                <Input onChange={handleChange} type="username" name="username" id="exampleUsername" placeholder="Username" />
            </FormGroup>
            {' '}
            <FormGroup >
                <Label for="examplePassword" hidden>Password</Label>
                <Input onChange={handleChange} type="password" name="password" id="examplePassword" placeholder="Password" />
            </FormGroup>
            {' '}
            <Button className="btn btn-med btn-danger btn-block" onClick={handleSubmit}>Submit</Button>
            
            </Form>
            <a href='/create'>Create Account</a>
        </div>
      );
}
export default Login
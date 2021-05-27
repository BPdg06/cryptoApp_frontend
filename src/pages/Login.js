import React, { useEffect } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {useState} from 'react'













const Login = (props) => {

    const [user, setUser] =  useState({email: "", password: ""}) 
    const handleSubmit = () => {
      props.getLogin(user.email, user.password)
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
        <>
            <Form inline>
            <FormGroup >
                <Label for="exampleEmail" hidden>email</Label>

                <Input type="email" name="email" id="exampleEmail" placeholder="Username" />

            </FormGroup>
            {' '}
            <FormGroup >
                <Label for="examplePassword" hidden>Password</Label>
                <Input onChange={handleChange} type="password" name="password" id="examplePassword" placeholder="Password" />
            </FormGroup>
            {' '}
            <Button href= '/home' onClick={handleSubmit}>Submit</Button>
            
            </Form>
            <a href='/create'>forgot username/password</a>
        </>
      );
}
export default Login
import React, { useEffect } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {useState} from 'react'













const Login = (props) => {

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
      React.useEffect(() => {
        getLogin();
      }, []);
  
    
    
    return (
        <>
            <Form inline>
            <FormGroup handleChange={handleChange}>
                <Label for="exampleEmail" hidden>email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
            </FormGroup>
            {' '}
            <FormGroup handleChange={handleChange}>
                <Label for="examplePassword" hidden>Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
            </FormGroup>
            {' '}
            <Button onClick={handleSubmit}>Submit</Button>
            
            </Form>
            <a href=''>forgot username/password</a>
        </>
      );
}
export default Login
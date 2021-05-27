import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Spinner } from 'reactstrap';
import PropTypes from 'prop-types'












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
  
    FormGroup.propTypes = {
        children: PropTypes.node,
        // Applied the row class when true, does nothing when false
        row: PropTypes.bool,
        // Applied the form-check class when true, form-group when false
        check: PropTypes.bool,
        inline: PropTypes.bool,
        // Applied the disabled class when the check and disabled props are true, does nothing when false
        disabled: PropTypes.bool,
        // Pass in a Component to override default element
        tag: PropTypes.string, // default: 'div'
        className: PropTypes.string,
        cssModule: PropTypes.object,
      };
    
    return (
        <>
            <Form inline>
            <FormGroup>
                <Label for="exampleEmail" hidden>email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
            </FormGroup>
            {' '}
            <FormGroup>
                <Label for="examplePassword" hidden>Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
            </FormGroup>
            {' '}
            <Button href= '/home' onClick={handleSubmit}>Submit</Button>
            
            </Form>
            <a href=''>forgot username/password</a>
        </>
      );
}
export default Login
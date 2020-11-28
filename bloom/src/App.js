import logo from './logo.svg';
import './App.css';
import { Button,Form,Label,FormGroup,Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';

function App() {
  return (
    
    <Form className = "login-form">
     <h1 className = "text-center" id = "heading"><b><i>BLOOM</i></b></h1>
        
        <h2 className ="text-center">WELCOME</h2>
        <FormGroup>
          <Label>Email</Label>
          <Input type= "email" placeholder="email"/>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type= "password" placeholder="password"/>
        </FormGroup>
        <Button className ="btn-lg btn-dark btn-block">Log In</Button>
        <div className = "text-center pt-3">
          or continue with your social account
        </div>
        <FacebookLoginButton className="mt-3 mb-3"/>
        <div className="text-center">
          <a href = "/sign-up">Sign Up</a>
          <span className = "p-2">|</span>
          <a href ="/forgot-password">Forgot Password</a>
        </div>
        </Form>
       
  );
}

export default App;

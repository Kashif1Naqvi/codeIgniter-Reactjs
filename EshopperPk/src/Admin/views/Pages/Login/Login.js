import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {PostData} from './PostData';
class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      user_email:'',
      Password:'',
      redirect :false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}

handleSubmit(event){
  event.preventDefault()
  if(this.state.user_email && this.state.Password){
      PostData('login',this.state)
  }
}

// handleSubmit = (event) => {
  // event.preventDefault()
//   const url = "http://localhost/API/UserController/login"
//   const myHeaders = new Headers()
//   myHeaders.append('Content-Type','application/json')
//   const options = {
//       method:"POST",
//       body: JSON.stringify(),
//       myHeaders
//   }
//   fetch(url,options)
//     .then(()=>{
//       if(this.state.username && this.state.Password == true){
//         this.setState({
//           user_email:this.state.user_email,
//           Password  :this.state.Password,
//           redirect  :true
//         })
//       }
//     })
//     .catch(()=>{
//       this.setState({
//         error:this.state.error
//       })
//     })
// }

handleChange = (event) =>{
  const name  = event.target.name
  const value = event.target.value
  this.setState({ [name]:value })
}
  render() {
    if (this.state.redirect){
      return <Redirect to='/dashboard'/>
    }
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form  onSubmit={this.handleSubmit} >
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="email" placeholder="Email" name="user_email" value={this.state.user_email} onChange={this.handleChange} autoComplete="username" required />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" name="Password" value={this.state.Password} onChange={this.handleChange} autoComplete="current-password" required />
                      </InputGroup>
                      <Row>
                        <Col xs="6">

                          <input  type="submit" color="primary" value="Login" className="px-4" />

                        </Col>
                        <Col xs="6" className="text-right">
                          <Button  color="link"  className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>welcome here i do many works for you just sign in then start working.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                    <p>Error:{this.state.error}</p>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;

import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container,Alert, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      Username:'',
      user_email:'',
      Password:'',
      error:null,
      response:{},
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  	handleChange(event){
    const name  = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
    } 

    handleSubmit=(event)=>{
     event.preventDefault();
     this.onFormSubmit(this.state);
     this.setState(this.initialState);

    }
    onFormSubmit(data){
      const apiUrl = "http://localhost/API/UserController/insertUsers";
      const myHeaders = new Headers();
      myHeaders.append('Content-Type','application/json');
      const options = {
        method:'POST',
        body:JSON.stringify(data),
        myHeaders
      };
      fetch(apiUrl,options)
        .then(res => res.json )
        .then(result =>{
          this.setState({
           response:result,
         });
        })
        .then(error=>{
          this.setState({
            error
          });
        });

        this.setState({
        Username:'',
        user_email:'',
        Password:''
        });
    }
  render() {
    return (
        <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={this.handleSubmit}>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input   type="text" name="UserName" value={this.state.UserName} onChange={this.handleChange} placeholder="Username" autoComplete="username"   />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input   type="text" placeholder="User email" name="user_email" value={this.state.user_email} onChange={this.handleChange} autoComplete="email" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input   type="password" placeholder="Password" value={this.state.Password} onChange={this.handleChange} name="Password" autoComplete="new-password" />
                    </InputGroup>
                    <Button color="success" block>Create Account</Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook mb-1" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter mb-1" block><span>twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
                  {this.state.response.status === 'success' && <div><br /><Alert variant="info">{this.state.response.message}</Alert></div>}
                            {this.state.error && <div>Error: {this.state.error.message}</div>}
      </div>
    );
  }
}
export default Register;

// import React, { Component } from 'react';
// class Register extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//      Username:'',
//       Password:'',
//       user_email:'',
//     }
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.onFormSubmit = this.onFormSubmit.bind(this);
//   }

//   handleChange(event) {
//     const name = event.target.name;
//     const value = event.target.value;

//     this.setState({
//       [name]: value
//     })
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     this.onFormSubmit(this.state);
//     this.setState(this.initialState);
//   }
//   onFormSubmit(data) {
//     const apiUrl = 'http://localhost/API/UserController/insertUsers';

//     const myHeaders = new Headers();
//     myHeaders.append('Content-Type', 'application/json');
   
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(data),
//       myHeaders
//     };

//     fetch(apiUrl, options)
//       .then(res => res.json())
//       .then(result => {
//         this.setState({
//           response: result,
//           isAddProduct: false
//         })
//       },
//       (error) => {
//         this.setState({ error });
//       }
//     )
//       this.setState({
//          Username:'',
//       Password:'',
//       user_email:'',
//       })
//   }

//   render() {
//     return (
//       <div>
//         <h2>Add Product</h2>
//         <div>
//           <div>
//             <form onSubmit={this.handleSubmit}>
              
//                 <label>Product Name</label>
//                 <input
//                   type="text"
//                   name="Username"
//                   value={this.state.Username}
//                   onChange={this.handleChange}
//                   placeholder="PUsername"/>
              
//                 <label>Password</label>
//                 <input
//                   type="text"
//                   name="Password"
//                   value={this.state.Password}
//                   onChange={this.handleChange}
//                   placeholder="Password" />
//                 <label>user_email</label>
//                 <input
//                   type="text"
//                   name="user_email"
//                   value={this.state.user_email}
//                   onChange={this.handleChange}
//                   placeholder="user_email" />
//                 <button variant="success" type="submit">Save</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Register;

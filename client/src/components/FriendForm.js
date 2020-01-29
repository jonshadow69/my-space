import React from "react";
import axios from "axios";
import {Form, } from "semantic-ui-react";

class FriendForm extends React.Component {
  state = {firstName:"",lastName:"", age:"", phone:"", email:"", };

  componentDidMount() {
    if (this.props.id)
      this.setState({ 
        firstName: this.props.firstName,
         lastName: this.props.firstName,
          age: this.props.age ,  
          phone: this.props.phone, 
          email: this.props.email, 
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
      if (this.props.id)
        this.props.editFriend({ 
          id: this.props.id, 
          firstName: this.props.firstName, 
          lastName: this.props.firstName, 
          age: this.props.age ,  
          phone: this.props.phone,
          email: this.props.email, 
        });
      else
      this.props.addFriend(this.state);
    this.setState({ firstName:"",lastName:"", age:"", phone:"", email:"", });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  };

  render(){
    const { firstName, lastName, age, phone, email} = this.state;
    <Form onSubmit={this.handleSubmit}>
      <Form.Input
        fluid
        required
        label="First Name"
        placeholder="First Name"
        name="firstName"
        value={firstName}
        onChange={this.handleChange}
        />
      <Form.Input
        fluid
        required
        label="lastName"
        placeholder="lastName"
        name="lastName"
        value={lastName}
        onChange={this.handleChange}
        />
        <Form.Input
        fluid
        required
        label="age"
        placeholder="age"
        name="age"
        value={age}
        onChange={this.handleChange}
        />
      <Form.Input
        fluid
        required
        label="Phone"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={this.handleChange}
      />
      <Form.Input
        fluid
        required
        label="email"
        placeholder="email"
        name="email"
        value={email}
        onChange={this.handleChange}
      />
     <Form.Button color="blue" inverted>Submit</Form.Button>
    </Form>
    
  };
};

export default FriendForm;
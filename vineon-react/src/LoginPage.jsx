import React from "react";


const handleOnChange = (field,component) => (event) => {
    component.setState({[field]: event.target.value})
}
    
export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: ""
    };
    this.handleUsernameChange = handleOnChange("username", this)
    this.handlePasswordChange = handleOnChange("password", this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
      console.log(this.state)
      event.preventDefault()
  }

  render() {
    const {username, password} = this.state  
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <p>
              username: <input type="text" onChange={this.handleUsernameChange} value={username} />{" "}
            </p>
            <p>
              password: <input type="text" onChange={this.handlePasswordChange} value={password}/>{" "}
            </p>
            <input type="submit" value="Submit" />
          </fieldset>
        </form>
      </React.Fragment>
    );
  }
}

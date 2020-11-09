import React, { Component } from 'react';
import './App.css';
import {auth, provider} from './service/firebase/firebase.js';

class App extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			isAuth: false,
			isError: false,
			account: null
		}
	}
	
	loginGoogle = () => {
  auth.signInWithPopup(provider)
  .then((res) => {
    this.setState({
      isAuth: true,
      account: res.additionalUserInfo.profile
    });
  }).catch((err) => {
    this.setState({
      isError: err
    });
  });
}
logoutGoogle = () => {
  auth.signOut()
  .then(() => {
    this.setState({
      isAuth: false,
      account: []
    });
  })
  .catch((err) => {
    this.setState({
      isError: err
    });
  })
}
	
  render(){
	  const {isAuth, isError, account} = this.state;
	  return(
	  <div className="App">
    <header className="App-header">
     {isAuth ? (
      <>
       <img
        src={account.picture}
        alt={account.name}
        width="200"
       />
       <p>{account.name}</p>  
      <button onClick={this.logoutGoogle}>
       Logout
      </button>
     </>
    ):(
     <>
      <p>Firebase Authentication</p>
      <button onClick={this.loginGoogle}>
       Login With Google    
      </button>
     </>
    )}
    <small>{isError.message}</small>
   </header>
  </div>
	  );
  }
}

export default App;

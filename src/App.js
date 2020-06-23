import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/Shop/Shop.component";
import { Switch, Route } from "react-router-dom";
import SignInAndSignUp from "./pages/Sign-in-and-sign-up/Sign-in-and-sign-up.componant";
import Header from "./components/Header/header.componant";
import { auth } from "./firebase/firebase";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      createUser: null,
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ createUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.createUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;

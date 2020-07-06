import React from "react";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/Shop/Shop.component";
import Checkout from './pages/Checkout/checkout.componant'

import { Switch, Route, Redirect } from "react-router-dom";
import SignInAndSignUp from "./pages/Sign-in-and-sign-up/Sign-in-and-sign-up.componant";
import Header from "./components/Header/header.componant";
import { auth, createUserProfile } from "./firebase/firebase";
import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/User/user.action";
import { UserSelector} from './Redux/User/User.selector'
import {createStructuredSelector} from 'reselect'

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to='/'/> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStatetoProps = createStructuredSelector({
  currentUser: UserSelector,
});

export default connect(mapStatetoProps, mapDispatchToProps)(App);

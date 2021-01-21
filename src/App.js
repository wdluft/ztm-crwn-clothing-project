/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import SignInSignUp from './pages/sign-in-and-sign-up/SignInSignUp';
import { auth, createUserProfileDocument } from './firebase/firebaseUtils';
import { setCurrentUser } from './redux/user/user-actions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        this.props.setCurrentUser({ userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);

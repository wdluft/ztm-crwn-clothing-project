/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import SignInSignUp from './pages/sign-in-and-sign-up/SignInSignUp';
import { auth, createUserProfileDocument } from './firebase/firebaseUtils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
        console.log(this.state);
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;

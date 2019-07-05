import React from "react";
import { signIn, signOut } from "../actions";
import { connect } from "react-redux";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    // load only once to app when the this component is rendered in the app
    //gapi load method accepts the callback method as second parameter
    // where it gets executed once loading is done.
    window.gapi.load("client:auth2", () => {
      // we are initiating the client once the load is done
      // init will return promise once initalization done
      window.gapi.client
        .init({
          clientId: "Your google client id",
          scope: "email"
        })
        .then(() => {
          // taking the reference to auth instance
          this.auth = window.gapi.auth2.getAuthInstance();
          // set the sign in status to component state
          this.updateSignIn(this.auth.isSignedIn.get());
          //this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.updateSignIn);
        });
    });
  }

  updateSignIn = isSignedIn => {
    console.log(isSignedIn);
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
    //this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  signInClick = () => {
    this.auth.signIn();
    //this.props.signIn();
  };

  singOutClick = () => {
    this.auth.signOut();
  };

  getStatus() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn === true) {
      return (
        <button className="ui red google button" onClick={this.singOutClick}>
          <i className="google icon" />
          Sign out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.signInClick}>
          <i className="google icon" />
          Signin with Google
        </button>
      );
    }
  }
  render() {
    return <div>{this.getStatus()}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);

import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  //   componentDidMount() {
  //     this.props.fetchUser(this.props.userId);
  //   }
  render() {
    /* 
      //same logic can be added in the mapStateToProps
    const dispalyUser = this.props.user.find(
      temp => temp.id === this.props.userId
    ); */
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}
/*
// this is the  just mapping the fields like user
const mapStateToProps = state => {
  return {
    user: state.user
  };
}; */
/**
 * ownProps is the props which holds the data passed from the parent
 * you can add filter logic and all inside the mapStateToProps
 * @param {*} state
 * @param {*} ownProps
 */
const mapStateToProps = (state, ownProps) => {
  return { user: state.user.find(author => author.id === ownProps.userId) };
};

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);

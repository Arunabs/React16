import React from "react";
import Modal from "../modal";
import history from "../../history";
import { Link } from "react-router-dom";
import { fetchStream, deleteStream } from "../../actions";
import { connect } from "react-redux";

class streamDelete extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
  }
  actions = () => {
    return (
      <React.Fragment>
        <button onClick={this.deleteCallBack} className="ui button negative">
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  };
  getContent() {
    if (!this.props.stream) {
      return "are you sure you want to delete?";
    }

    return `are you sure you want to delete? ${this.props.stream.title}`;
  }
  deleteCallBack = () => {
    const { id } = this.props.match.params;
    this.props.deleteStream(id);
  };
  render() {
    return (
      <Modal
        title="Delete Streams"
        content={this.getContent()}
        actions={this.actions()}
        onClose={() => history.push("/")}
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.stream[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(streamDelete);

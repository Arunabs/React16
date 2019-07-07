import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
import _ from "lodash";

class StreamEdit extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
  }
  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };
  render() {
    const data = _.pick(this.props.stream, "title", "description");
    if (!this.props.stream) {
      return <div>Loading....</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>

        <StreamForm initialValues={data} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("state", state.stream[ownProps.match.params.id]);
  return {
    stream: state.stream[ownProps.match.params.id]
  };
};
export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);

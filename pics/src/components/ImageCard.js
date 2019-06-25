import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    /**
     * 1. create the ref using the createRef method
     * 2. ref gives an access to individaul dom element
     */
    this.imageRef = React.createRef();
    this.state = { span: 0 };
  }
  componentDidMount() {
    console.log(this.imageRef.current.clientHeight);
    /**
     * binding the eventlistener on load method to get the height of the each element in callback method
     *
     */
    this.imageRef.current.addEventListener("load", this.setSpan);
  }

  setSpan = () => {
    let height = this.imageRef.current.clientHeight;
    const span = Math.ceil(height / 10);
    this.setState({ span });
  };
  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}
export default ImageCard;

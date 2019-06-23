import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  /**
   * 1. solving the execution context using the bind method
   * this is the event handler method
   * @param {*} e
   *
   */
  onSubmitHandle(e) {
    e.preventDefault(); // avoiding the default submit button behavior
    console.log(this.state.term);
    /**
     * class component will use the keyword 'this' to access the props
     * ex: this.props.onSubmit
     */
    this.props.onSubmit(this.state.term); // calling the parent method and pass the value
  }
  /**
   * 2. Solving the exection context using the arrow method
   * @param {*} e
   */
  prinVal = e => {
    console.log(this.state.term);
  };
  /**
   * 3. Solving the exection connection by calling from the arrow method
   */
  printMe() {
    console.log(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onSubmitHandle.bind(this)} className="ui form">
          <div>
            <button type="button" onClick={this.onSubmitHandle.bind(this)}>
              Exe Context 1
            </button>
            <button type="button" onClick={this.prinVal}>
              Exe Context 2
            </button>
            <button type="button" onClick={() => this.printMe()}>
              Exe Context 3
            </button>
          </div>
          <div className="field">
            <label> Image search</label>
            {/* 1. this is the controlled element  because we know the value of the element from the state 
                2. even though value has the user typed text, again we are forcefully setting the value through {this.state.term} 
                             3. how ? 
                             once user type something, on change of the input value we are setting the 'term' with the help of setState method. 
                             any update done through setState method rerenders the JSX 
                */}

            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;

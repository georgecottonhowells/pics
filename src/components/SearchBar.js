import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this);
    console.log(this.state.term);

    this.props.onSubmit(this.state.term);
  };

  render() {
    console.log(this);
    return (
      <div className="ui sugment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;

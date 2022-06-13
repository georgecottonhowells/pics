import React from "react";
import ReactDOM from "react-dom";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: { query: term },
      }
    );

    console.log(this);

    this.setState({ images: response.data.results });
  };

  render() {
    console.log(this.state);
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />

        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { FormGroup, FormControl, InputGroup, Glyphicon } from "react-bootstrap";
import Gallery from "./Gallery";
class Global extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      items: []
    };
  }
  search() {
    const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";
    fetch(`${BASE_URL}${this.state.query}`, { method: "GET" })
      // .then(res => console.log(res));
      .then(res => res.json())
      // .then(json => console.log(json));
      .then(json => {
        let { items } = json;
        this.setState({ items });
        console.log(items);
      });
  }
  render() {
    return (
      <div className="Global">
        <h2>Book Explorer!</h2>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for a Book"
              onChange={event => this.setState({ query: event.target.value })}
              onKeyPress={e => {
                // if (e.which === 13) {
                if (e.key === "Enter") {
                  this.search();
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"> </Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <Gallery items={this.state.items} />
      </div>
    );
  }
}
export default Global;

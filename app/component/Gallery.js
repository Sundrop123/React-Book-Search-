import React, { Component } from "react";

class Gallery extends Component {
  render() {
    let alternate =
      "https://cdn3.iconfinder.com/data/icons/essential-pack-2/48/44-Photo-128.png";
    return (
      <div>
        {this.props.items.map((e, idx) => {
          let { title, imageLinks, infoLink } = e.volumeInfo;

          return (
            <a key={idx} className="book" href={infoLink} target="_blank">
              <img
                src={
                  imageLinks !== undefined ? imageLinks.thumbnail : alternate
                }
                alt="book image"
                className="book-img"
              />
              <div className="book-text">{title}</div>
            </a>
          );
        })}
      </div>
    );
  }
}
export default Gallery;

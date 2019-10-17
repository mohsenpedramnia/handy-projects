import React, { Component } from "react";

export default class Book extends Component {
  render() {
    const { img, title, author } = this.props.info;
    return (
      <article>
        <img src={img} width="150" alt="book" />
        <h3>Title:{title}</h3>
        <h3>Author:{author}</h3>
      </article>
    );
  }
}

// TODO: update dependencies if needed
import React, { Component } from 'react';

// TODO: transform the following functional component into a class based component
// TODO: set the initial state { clicked: false }
// TODO: listen to the click event on `.article`
// TODO: code the `handleClick` function (which adds a 'clicked' class to the `.article`)
// const Article = (props) => {
//   return (
//     <div className="article">
//       <h2 className="article-title">{props.title}</h2>
//       <p>{props.body}</p>
//     </div>
//   );
// }

class Article extends Component {

  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  }

  articleClass() {
    let articleClass = 'article';
    if (this.state.clicked) {
      articleClass += ' clicked';
    }
    return articleClass
  }


  render() {
    return (
      // <div className={this.state.clicked ? "article clicked" : "article"} onClick={this.handleClick}>
      <div className={this.articleClass()} onClick={this.handleClick}>
        <h2 className="article-title">{this.props.title}</h2>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default Article;

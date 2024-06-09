import { Component } from "react";
import './App.css'



class App extends Component {
  state = {
    post: []
  };

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => this.setState({ posts }))
  }


  render() {
    const { post } = this.state;
    return (
      <div className="App">
        {post.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{ post.body}</p>
          </div>
        ))}
        
      </div>
    );

  }
}

export default App;

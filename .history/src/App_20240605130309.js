import { Component } from 'react';
import './App.css';
import { PostCard } from './components/PostCard';
import { loadPosts } from './utils/load-posts';
import { Posts } from './components/Posts';

class App extends Component {
  state = {
    posts: []
  };
  async componentDidMount() {
    await this.loadPosts();
  }
  loadPosts = async () => {
    const postAndPhotos = await loadPosts();
    this.setState({ posts: postAndPhotos });
  }
  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <Posts />
      </section>
    );

  }
}

export default App;

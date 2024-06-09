import { Component } from 'react';
import './styles.css';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
  };
  async componentDidMount() {
    await this.loadPosts();
  }
  loadPosts = async () => {
    const postAndPhotos = await loadPosts();
    this.setState({ 
      posts: postAndPhotos.slice(0, 1), 
      allPosts: postAndPhotos, 
    
    });
  }
  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <Posts posts={posts}/>
      </section>
    );

  }
}

export default Home;

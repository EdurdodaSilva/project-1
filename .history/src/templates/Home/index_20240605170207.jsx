import { Component } from 'react';
import './styles.css';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 3
  };
  async componentDidMount() {
    await this.loadPosts();
  }
  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postAndPhotos = await loadPosts();
    this.setState({ 
      posts: postAndPhotos.slice(page, postsPerPage), 
      allPosts: postAndPhotos, 
    
    });
  }

  loadMorePosts = () => {
    console.log("load more post")

  }

  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <Posts posts={posts}/>
        <button onClick={this.loadMorePosts}>
          Load more post
        </button>
      </section>
    );

  }
}

export default Home;

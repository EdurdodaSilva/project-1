import { Component } from 'react';
import './styles.css';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 6
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
    const {
      page,
      postsPerPage,
      allPosts,
      posts,
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage })

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

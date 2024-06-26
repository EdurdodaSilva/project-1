import { Component } from "react";
import './App.css'
import { PostCard } from "../components/PostCard";



class App extends Component {
  state = {
    posts: []
  };

  componentDidMount(){
    this.loadPosts();
    }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')
    const [posts, photos] = await Promise.all([ postsResponse, photosResponse ]);
    const postsJson = await posts.json();
    const photosJson = await photos.json();
    
    const postAndPhotos = postsJson.map((posts, index) => {
      return { ...posts, cover: photosJson[index].url }
    })
    this.setState({ posts: postAndPhotos });
  
  }


  render() {
    const { posts } = this.state;
    return (
    <section className="container">
      <div className="posts">
        {posts.map(post => (
          <PostCard post={post} />
        ))}
        
      </div>
    </section>
    );

  }
}

export default App;

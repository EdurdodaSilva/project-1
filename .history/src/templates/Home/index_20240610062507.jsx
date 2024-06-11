import { Component } from 'react';
import './styles.css';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';


export const Home = () => {

  return (
    <section className="container">
      <div className='search-container'>
        {!!searchValue && (
          <> 
            <h1>Search value: {searchValue}</h1>
          </>
        )}
        <TextInput searchValue={searchValue} handleChange={this.handleChange}/>
      </div>

      {filteredPosts.length > 0 && (
        <Posts posts={filteredPosts}/>
      )}

      {filteredPosts.length === 0 && (
        <p>Não foi encontrado post com esse titulo.</p>
      )}

      {!searchValue && (
        <div className='btn-container'>
          <Button           
          text="Load more post"
          onClick={this.loadMorePosts}
          disabled={noMorePosts}
          />
        </div>
      )}
    </section>
  );


}

class Home2 extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 8,
    searchValue: '',
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

  handleChange = (e) => {
    const {value} = e.target
    this.setState({searchValue: value})

  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    
    const filteredPosts = !!searchValue ?    
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    })
    : posts;

    return (
      <section className="container">
        <div className='search-container'>
          {!!searchValue && (
            <> 
              <h1>Search value: {searchValue}</h1>
            </>
          )}
          <TextInput searchValue={searchValue} handleChange={this.handleChange}/>
        </div>

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts}/>
        )}

        {filteredPosts.length === 0 && (
          <p>Não foi encontrado post com esse titulo.</p>
        )}

        {!searchValue && (
          <div className='btn-container'>
            <Button           
            text="Load more post"
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
            />
          </div>
        )}
      </section>
    );

  }
}

export default Home;

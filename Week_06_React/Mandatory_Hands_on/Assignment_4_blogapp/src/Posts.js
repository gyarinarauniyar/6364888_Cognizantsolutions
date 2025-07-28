import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // Fetch posts
  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
      .catch(error => console.error('Error fetching posts:', error));
  }

  // Lifecycle method to fetch posts
  componentDidMount() {
    this.loadPosts();
  }

  // Error boundary
  componentDidCatch(error, info) {
    console.error('Error:', error, info);
    alert('Something went wrong while rendering posts!');
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Error loading posts.</h2>;
    }
    return (
      <div>
        <h2>Blog Posts</h2>
        {this.state.posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;

import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/Home.css';
import { blogPosts } from '../assets/static/blogsList';


function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='home-container'>
      <h1>Welcome to Our Blog</h1>
      <p>Discover articles on various topics written by our passionate team.</p>
      
      <input
        type='text'
        placeholder='Search for a blog...'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='search-bar'
      />
        <h2>Blog Posts</h2>

      <div className='featured-section'>
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <Link to={`/blog`} state={{ blog: post }} style={{ textDecoration: 'none', color: 'blue' }}>

            <div key={post.id} className='post-card'>
                <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>              </Link>

          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </div>
  );
}
export default Home;

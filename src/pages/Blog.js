import { useLocation } from 'react-router-dom';
import '../styles/Blog.css';

function Blog() {
  const location = useLocation();
  const blog = location.state?.blog;

  if (!blog) {
    return <h2>No blog selected</h2>;
  }

  return (
    <div className='blog-container'>
      <div className='blog-content'>
        <h2 className='blog-title'>{blog.title}</h2>
        <p className='blog-text'>{blog.content}</p>
      </div>
    </div>
  );
}

export default Blog;
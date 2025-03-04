import '../styles/About.css';

function About() {
    return (
      <div className='about-container'>
        <h1>About Us</h1>
        <p>Welcome to our blog platform! We share insightful content on technical topics.</p>
        <h2>Our Mission</h2>
        <p>To create a space where knowledge and ideas can be shared freely.</p>
        <h2>Meet the Team</h2>
        <div className='team-section'>
          <div className='team-member'>
            <h3>Anirban Sadhu</h3>
            <p>Founder & Writer</p>
          </div>
          <div className='team-member'>
            <h3>Mobile No.</h3>
            <p>6294243924</p>
          </div>
        </div>
      </div>
    );
  }
  export default About;
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const coursesData = [
  { name: 'Python', level: 'Join Python Quiz', route: 'python' },
  { name: 'JavaScript', level: 'Join JS Quiz', route: 'javascript' },
  { name: 'Java', level: 'Join Java Quiz', route: 'java' },
  // { name: 'C', level: 'Join C Quiz', route: 'C' },
  // { name: 'HTML', level: 'Join HTML Quiz', route: 'HTML' },

];

function Courses() {
  return (
    <div className='courses-container'>
      {coursesData.map((course, index) => (
        <div key={index} className='language-container'>
          <h2 className='nameof'>{course.name}</h2>
          <div className='levels-container'>
            <div className='card'>
              <Link to={`/courses/${course.route}`}>
                <div className='tools'>
                  <div className='circle'>
                    <span className='red box'></span>
                  </div>
                  <div className='circle'>
                    <span className='yellow box'></span>
                  </div>
                  <div className='circle'>
                    <span className='green box'></span>
                  </div>
                </div>
                <div className='card-content'>
                  <h3>{course.level}</h3><br />
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Courses;

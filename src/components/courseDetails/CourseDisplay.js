// CourseDisplay.js
import React, { useState } from 'react';
import '../styles/CourseDisplay.css';
import DetailedCourseInfo from '../courseDetails/DetailedCourseInfo';

function CourseDisplay({ courseList, searchQuery }) {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCardClick = (course) => {
    setSelectedCourse(course);
  };

  const [likes, setLikes] = useState({});

  const handleLike = (event, courseId) => {
    event.stopPropagation();
    setLikes((prevLikes) => ({
      ...prevLikes,
      [courseId]: (prevLikes[courseId] || 0) + 1,
    }));
  };

  // Filter courses based on search query
  const filteredCourses = courseList.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='container'>
      {selectedCourse ? (
        <DetailedCourseInfo course={selectedCourse} />
      ) : (
        filteredCourses.map((item) => (
          <div className="cards" key={item.id} onClick={() => handleCardClick(item)}>
            <h3>{item.name}</h3>
            <h5>{item.instructor}</h5>
            <button className="likeButton" onClick={(event) => handleLike(event, item.id)}>
              Like ({likes[item.id] || 0})
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default CourseDisplay;

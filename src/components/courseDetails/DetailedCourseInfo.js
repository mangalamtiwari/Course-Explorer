import React from 'react';
import '../styles/DetailedCourseInfo.css';
function DetailedCourseInfo({ course }) {
    return (
        <div className='detailedCourse'>
            <h2>{course.name}</h2>
            <p>Instructor: {course.instructor}</p>
            <p>Description: {course.description}</p>
            <p>Duration: {course.duration}</p>
            <p>Schedule: {course.schedule}</p>
            <h2> Enrolled Student for this course are: </h2>
            {course.students.map((student) => (
                <div key={student.id}>
                        <li>{student.name}</li>
                </div>
            ))}
        </div>
    );
}

export default DetailedCourseInfo;

import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css'; 

const Course = ({ id, title, description, level, image }) => {
  return (
    <div className="course-item">
      <h3 className="course-title">{title}</h3> 
      <img src={image} alt="img non chargée" className="course-image" /> 
      <div className="course-details"> 
        <p>{description}</p>
        <p><strong>Niveau :</strong> {level}</p>
        <Link to={`/course/${id}`}>
          <button>En savoir plus</button>
        </Link>      
      </div>
    </div>
  );
};

export default Course;

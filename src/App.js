import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import CourseDetails from './Components/CourseDetails'; 
import CoursesPage from './Pages/CoursesPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CoursesPage />} />
        <Route path="/course/:id" element={<CourseDetails />} />
      </Routes>
    </Router>
  );
};

export default App;

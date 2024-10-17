import React from 'react';
import Header from '../Components/Header';
import CourseList from '../Components/CourseList';

const HomePage = () => {
  return (
    <>
      <Header />
      <main id='cours'>
        <CourseList />
      </main>
      <footer id='footer'>
        <p>© 2024 EduAfrica</p>
        <p>Adresse mail : eduafrica@yahoo.fr</p>
        <p>Tel : 33 123 45 67</p>
        <p>Siège Social : Dakar, SEN</p>
      </footer>
    </>
  );
};

export default HomePage;
